import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectListingComponent } from './project-listing.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    ProjectListingComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports: [ProjectListingComponent]
})
export class ProjectListingModule { }
