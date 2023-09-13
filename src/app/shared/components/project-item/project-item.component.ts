import { Component, Input } from '@angular/core';
import { ProjectProps } from '../../types/ProjectsTypes';
import { faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent {
  @Input() item!: ProjectProps

  public defaultIcon = faImage

  public openProject(): void {
    if(!this.item.link) return
    window.open(this.item.link, '_blank')
  }
}
