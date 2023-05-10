import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Task } from '../home/home.component';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
  @Input() task: Task = {
    name: '',
    id: '',
    dueDate: new Date(),
    description: '',
    status: '',
    priority: 'none',
  };

  editMode: boolean = false;

  constructor(private dialog: MatDialog,
    private changeDetectorRef: ChangeDetectorRef) { }

  openEditDialog() {
    this.dialog.open(AddTaskDialogComponent, {
      width: '600px',
      data: this.task,
    }).afterClosed().subscribe((result) => {
      if (result) {
        this.task = result;
      }
      this.onDetectChanges();
    });
  }

  onDetectChanges() {
    this.changeDetectorRef.detectChanges();
  }
}

