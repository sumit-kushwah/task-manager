import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.scss']
})
export class ProjectListingComponent {
  @Input() projects: { name: string, sections: string[] }[] = [];

  panelOpenState = false;

  editable = false;

  newProjectName = "";

  onAddNewProject() {
    if (this.newProjectName != '') {
      this.projects.push({ name: this.newProjectName, sections: [] });
      this.newProjectName = '';
    }

  }

}
