import { Component, Input } from '@angular/core';
import { DictionaryProps } from 'src/app/shared/types/LanguageTypes';
import { ItemLabels } from 'src/app/shared/types/NavTypes';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  @Input() dictionary!: DictionaryProps;

  public currentLabel: ItemLabels = ItemLabels.HOME
}
