import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.scss']
})
export class ProjectListingComponent {
  @Input() projects: { name: string, sections: string[] }[] = [];

  panelOpenState = false;
}
