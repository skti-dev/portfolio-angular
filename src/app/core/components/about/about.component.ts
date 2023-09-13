import { Component, Input } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { AvailableLanguages, DictionaryProps } from 'src/app/shared/types/LanguageTypes';
import { ItemLabels } from 'src/app/shared/types/NavTypes';
import { CERTIFICATES, GRADUATIONS, Technologies } from 'src/mockData/constants/GeneralData';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  @Input() dictionary!: DictionaryProps;
  @Input() currentLanguage!: AvailableLanguages

  public currentLabel: ItemLabels = ItemLabels.ABOUT
  public icon = faBook

  public returnPath() {
    const path = '/mockData/cvs/cv_augusto_'
    const extension = '.docx'
    if(!this.currentLanguage) return `${path}pt_br${extension}`
    return `${path}${this.currentLanguage}${extension}`
  }

  public getFiapLink(): string {
    return CERTIFICATES.FIAP
  }

  public getTechnology(key: 'react'|'angular'|'vue'|'js'|'ts'|'rest'): Technologies | string {
    if(key === 'react') {
      return Technologies.REACT
    } else if(key === 'angular') {
      return Technologies.ANGULAR
    } else if(key === 'vue') {
      return Technologies.VUE
    } else if(key === 'js') {
      return Technologies.JAVASCRIPT
    } else if(key === 'ts') {
      return Technologies.TYPESCRIPT
    } else if(key === 'rest') {
      return Technologies.REST
    }

    return '---'
  }

  public getUniversityName() {
    return GRADUATIONS.FIAP
  }
}
