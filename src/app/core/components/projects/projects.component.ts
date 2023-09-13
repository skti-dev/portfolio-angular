import { Component, Input } from '@angular/core';
import { DictionaryProps } from 'src/app/shared/types/LanguageTypes';
import { ItemLabels } from 'src/app/shared/types/NavTypes';
import { ProjectItems } from 'src/app/shared/types/ProjectsTypes';
import { PROJECTS } from 'src/mockData/constants/ProjectItems';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @Input() dictionary!: DictionaryProps;

  public currentLabel: ItemLabels = ItemLabels.PROJECTS
  public items: ProjectItems = PROJECTS
}
