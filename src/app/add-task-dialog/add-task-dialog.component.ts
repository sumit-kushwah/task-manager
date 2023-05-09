import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AddTaskDialogData } from 'src/interfaces/add-task-dialog-data.interface';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss']
})
export class AddTaskDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddTaskDialogComponent>) { }

  selectedPriority = 'no_priority';

  dueDate: Date = new Date();
  projects: { name: string, id: string }[] = [{ name: 'inbox', id: '1' }];
  selectedProject = this.projects[0].id;

  priorities: { value: string, viewValue: string, icon: string, color: string }[] = [
    { value: 'high_priority', viewValue: 'High Priority', icon: 'flag', color: 'red' },
    { value: 'medium_priority', viewValue: 'Medium Priority', icon: 'flag', color: 'orange' },
    { value: 'low_priority', viewValue: 'Low Priority', icon: 'flag', color: 'blue' },
    { value: 'no_priority', viewValue: 'No Priority', icon: 'flag', color: 'grey' },

  ];

  onAddTask() {

  }

  onCancel() {
  }
}
