import { Component, Input } from '@angular/core';
import { SkillProps } from '../../types/SkillsTypes';
import { DomSanitizer } from '@angular/platform-browser';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent {
  constructor(
    private sanitizer: DomSanitizer
  ) {}

  @Input() item!: SkillProps

  public isStringIcon():boolean {
    return typeof this.item.icon === 'string'
  }

  public returnIcon(): IconDefinition {
    if (typeof this.item.icon === 'string') {
      return faTimes
    }

    return this.item.icon
  }

  public sanitizeSvg(): SafeHtml {
    if(typeof this.item.icon !== 'string') {
      return ''
    }

    return this.sanitizer.bypassSecurityTrustHtml(this.item.icon);
  }
}
