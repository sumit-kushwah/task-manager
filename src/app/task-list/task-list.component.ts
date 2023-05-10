import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task } from '../home/home.component';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent {

  constructor(private dialog: MatDialog,
    private changeDetectorRef: ChangeDetectorRef) { }
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  tasks: Task[] = []

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  filters: { name: string, type: string, selected: boolean }[] = [
    { name: "To do", type: "status", selected: true },
    // {name: "In progress", type: "status", selected: false},
    // {name: "Blocked", type: "status", selected: false},
    { name: "Completed", type: "status", selected: false },
  ]

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  openAddTaskDialog() {
    this.dialog.open(AddTaskDialogComponent, {
      width: '600px'
    }).afterClosed().subscribe((task: Task) => {
      if (task) {
        this.tasks.push(task);
        this.onDetectChanges();
      }
    });
  }

  onDetectChanges() {
    this.changeDetectorRef.detectChanges();
  }
}
