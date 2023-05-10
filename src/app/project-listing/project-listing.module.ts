import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectListingComponent } from './project-listing.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProjectListingComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [ProjectListingComponent]
})
export class ProjectListingModule { }
