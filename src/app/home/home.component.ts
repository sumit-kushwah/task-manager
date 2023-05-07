import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  toolbarTitle = 'Task Manager';
  showFiller = false;
  sideNavOpened = true;
  userLoggedIn = true;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(AddTaskDialogComponent, {
      width: '300px',
      data: {
        animal: 'panda',
      },
    });
  }
}
