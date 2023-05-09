import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';

export interface Task {
  name: string;
  id: string;
  dueDate: Date;
  description: string;
  status: string;
  priority: 'low' | 'medium' | 'high' | 'none';
}
export interface Section {
  name: string;
  id: string;
  tasks: Task[];
}
export interface Project {
  id: string;
  name: string;
  sections: Section[];
}

const personalProjects: Project[] = [
  { name: 'Default', id: 'default', sections: [] },
  { name: 'Personal Project 1', id: 'default', sections: [] },
  { name: 'Personal Project 2', id: 'default', sections: [] },
  { name: 'Personal Project 3', id: 'default', sections: [] },
  { name: 'Personal Project 4', id: 'default', sections: [] },
]

const workProjects: Project[] = [
  { name: 'Default', id: 'default', sections: [] },
  { name: 'Work Project 1', id: 'default', sections: [] },
  { name: 'Work Project 2', id: 'default', sections: [] },
  { name: 'Work Project 3', id: 'default', sections: [] },
  { name: 'Work Project 4', id: 'default', sections: [] },
  { name: 'Work Project 5', id: 'default', sections: [] },
]


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  toolbarTitle = 'Task Manager';
  showFiller = false;
  sideNavOpened = true;
  userLoggedIn = true;
  selectedWorkspace = 'Personal';
  Workspace: any;

  projectsDetail: { name: string, sections: string[] }[] = personalProjects.map((project) => {
    return {
      name: project.name,
      sections: project.sections.map((section) => section.name),
    };
  });

  constructor(
    public dialog: MatDialog,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  openDialog() {
    this.dialog.open(AddTaskDialogComponent, {
      width: '500px',
      data: {
        animal: 'panda',
      },
    });
  }

  setWorkspace(workspace: string) {
    this.selectedWorkspace = workspace;
    if (workspace === 'Personal') {
      this.projectsDetail = personalProjects.map((project) => {
        return {
          name: project.name,
          sections: project.sections.map((section) => section.name),
        };
      });
    } else if (workspace === 'Work') {
      this.projectsDetail = workProjects.map((project) => {
        return {
          name: project.name,
          sections: project.sections.map((section) => section.name),
        };
      });
    }

    this.onDetectChanges();
  }

  onDetectChanges() {
    this.changeDetectorRef.detectChanges();
  }
}
