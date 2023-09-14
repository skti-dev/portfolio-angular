import { Component, OnInit } from '@angular/core';
import { FlagNames, LANGUAGE_KEY, AvailableLanguages } from '../../types/LanguageTypes';
import { LocalStorageService } from '../../services/LocalStorageService';
import { TranslateService } from '../../services/TranslateService';
import { environment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-toggle-language',
  templateUrl: './toggle-language.component.html',
  styleUrls: ['./toggle-language.component.scss']
})
export class ToggleLanguageComponent implements OnInit {
  constructor(
    private localStorageService: LocalStorageService,
    private translateService: TranslateService
  ) {}

  public displayFlag: FlagNames = FlagNames.BR
  public currentLanguage: AvailableLanguages = AvailableLanguages.PT_BR

  ngOnInit(): void {
    const language = this.localStorageService.getItem(LANGUAGE_KEY)
    if(language) this.toggleLanguage(language, false)
  }

  public toggleLanguage(selected: AvailableLanguages, saveOnLocalStorage = true): void {
    let success: boolean = true

    switch(selected) {
      case AvailableLanguages.EN:
      this.displayFlag = FlagNames.US
      break
      case AvailableLanguages.PT_BR:
        this.displayFlag = FlagNames.BR
      break
      default:
        success = false
        console.error('Unkown selected language')
      break;
    }

    if(success) {
      this.currentLanguage = selected
      this.translateService.setLanguage(this.currentLanguage)

      if(saveOnLocalStorage) {
        this.localStorageService.setItem(LANGUAGE_KEY, this.currentLanguage)
      }
    }

  }

  public getNextLanguage(): AvailableLanguages {
    switch(this.currentLanguage) {
      case AvailableLanguages.EN:
        return AvailableLanguages.PT_BR
      case AvailableLanguages.PT_BR:
        return AvailableLanguages.EN
      default:
        console.error('Unkown language')
        return AvailableLanguages.PT_BR
    }
  }

  public returnImagePath(): string {
    return `${environment.path}/assets/${this.displayFlag}.png`
  }
}
