import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../home/home.component';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss']
})
export class AddTaskDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  selectedPriority: 'none' | 'high' | 'low' | 'medium' = 'none';

  dueDate: Date = new Date();
  projects: { name: string, id: string }[] = [{ name: 'inbox', id: '1' }];
  selectedProject = this.projects[0].id;
  description: string = '';
  name: string = '';
  task: Task = {
    name: '',
    id: '',
    dueDate: new Date(),
    description: '',
    status: '',
    repeat: 'weekly',
    priority: 'none',
  }

  priorities: { value: string, viewValue: string, icon: string, color: string }[] = [
    { value: 'high', viewValue: 'High Priority', icon: 'flag', color: 'red' },
    { value: 'medium', viewValue: 'Medium Priority', icon: 'flag', color: 'orange' },
    { value: 'low', viewValue: 'Low Priority', icon: 'flag', color: 'blue' },
    { value: 'none', viewValue: 'No Priority', icon: 'flag', color: 'grey' },

  ];

  ngOnInit() {
    if (this.data) {
      this.task = this.data;
      this.selectedPriority = this.task.priority;
    }
  }

  onAddTask() {
    if (this.task.name != '') {
      this.dialogRef.close(this.task);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
