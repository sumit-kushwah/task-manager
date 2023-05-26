import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';
import { Auth, signOut, user, User } from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/services/firestore.service';

export interface Task {
  name: string;
  id: string;
  dueDate: Date;
  description: string;
  status: string;
  repeat: 'weekly' | 'daily' | 'monthly' | 'bi-weekly' | null;
  priority: 'low' | 'medium' | 'high' | 'none';
}
export interface Section {
  name: string;
  tasks: Task[];
}
export interface Project {
  name: string;
  sections: Section[];
}

export interface Workspace {
  name: string;
  projects: Project[],
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  toolbarTitle = 'Task Manager';
  showFiller = false;
  sideNavOpened = true;
  userLoggedIn = true;
  selectedWorkspace = 'Personal';
  Workspace: any;

  workspace: Workspace = {
    name: 'personal',
    projects: []
  }

  projectsDetail: { name: string, sections: string[] }[] = this.workspace.projects.map((project) => {
    return {
      name: project.name,
      sections: project.sections.map((section) => section.name),
    };
  });

  private auth: Auth = inject(Auth);
  user$ = user(this.auth);
  userSubscription: Subscription;
  photoURL: string | null | undefined = null;
  userId: string | undefined = undefined;

  constructor(
    public dialog: MatDialog,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private fireStoreService: FirestoreService
  ) {

    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
      if (aUser) {
        this.userLoggedIn = true;
      } else {
        this.userLoggedIn = false;
      }
      this.onDetectChanges();
    });
  }

  async ngOnInit(): Promise<void> {
    this.userId = this.auth.currentUser?.uid;
    this.photoURL = this.auth.currentUser?.photoURL;
    if (this.userId) {
      await this.fireStoreService.getUserData(this.userId);
      const userDetail = await this.fireStoreService.getUserMetaDetail(this.userId)
      if (this.fireStoreService.userData && this.fireStoreService.userData["workspace_" + userDetail?.['workspace']]) {
        this.workspace = this.fireStoreService.userData["workspace_" + userDetail?.['workspace']];
      }
    }

    this.onDetectChanges();
  }

  openDialog() {
    this.dialog.open(AddTaskDialogComponent, {
      width: '600px',
      data: {
        animal: 'panda',
      },
    });
  }

  setWorkspace(workspace: string) {
    this.selectedWorkspace = workspace;
    if (workspace === 'Personal') {
      if (this.fireStoreService.userData["workspace_personal"]) {
        this.workspace = this.fireStoreService.userData["workspace_personal"];
      } else {
        this.workspace = {
          name: 'personal',
          projects: []
        }
      }
    } else if (workspace === 'Work') {
      if (this.fireStoreService.userData["workspace_work"]) {
        this.workspace = this.fireStoreService.userData["workspace_work"];
      } else {
        this.workspace = {
          name: 'work',
          projects: []
        }
      }
    }
    this.onDetectChanges();
  }

  onDetectChanges() {
    this.changeDetectorRef.detectChanges();
  }

  async logout() {
    await signOut(this.auth);
    this.router.navigate(['/auth']);
  }

  ngOnDestroy() {
    // when manually subscribing to an observable remember to unsubscribe in ngOnDestroy
    this.userSubscription.unsubscribe();
  }
}
