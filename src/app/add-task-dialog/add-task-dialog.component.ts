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
}
