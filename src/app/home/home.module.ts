import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ProjectListingModule } from '../project-listing/project-listing.module';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { TaskListComponent } from '../task-list/task-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import { TaskComponent } from '../task/task.component';



@NgModule({
  declarations: [
    HomeComponent,
    AddTaskDialogComponent,
    TaskListComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProjectListingModule,
    DragDropModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule,
    MatButtonModule,
    MatChipsModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSidenavModule,
    MatTooltipModule,
    MatDividerModule,
    MatDialogModule,
    FormsModule,
    MatExpansionModule,
    MatInputModule,
    MatMenuModule,
    MatFormFieldModule,
  ]
})
export class HomeModule { }
