import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectListingComponent } from './project-listing.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ProjectListingComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [ProjectListingComponent]
})
export class ProjectListingModule { }
