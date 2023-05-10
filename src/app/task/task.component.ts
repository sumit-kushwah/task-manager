import { Component, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() title: string = '';

  editMode: boolean = false;
}

