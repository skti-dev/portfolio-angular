import { Component } from '@angular/core';
import { FlagNames } from '../../types/LanguageTypes';

@Component({
  selector: 'app-toggle-language',
  templateUrl: './toggle-language.component.html',
  styleUrls: ['./toggle-language.component.scss']
})
export class ToggleLanguageComponent {
  public displayFlag: FlagNames = FlagNames.BR

  public toggleLanguage(): void {
    this.displayFlag = this.displayFlag === FlagNames.BR ? FlagNames.US : FlagNames.BR
  }
}
