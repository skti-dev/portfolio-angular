import { Component, Input } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { DictionaryProps } from 'src/app/shared/types/LanguageTypes';
import { ItemLabels } from 'src/app/shared/types/NavTypes';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  @Input() dictionary!: DictionaryProps;

  public currentLabel: ItemLabels = ItemLabels.ABOUT
  public icon = faBook
}
