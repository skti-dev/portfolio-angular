import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from 'src/app/shared/services/TranslateService';
import { DictionaryProps } from 'src/app/shared/types/LanguageTypes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
    private translateService: TranslateService
  ) {
    this.languageChangeSubscription = this.translateService.languageChanged$.subscribe(() => {
      this.loadDictionary();
      this.currentLanguage = this.translateService.getLanguage()
    });
  }

  public currentLanguage = this.translateService.getLanguage()
  public dictionary!: DictionaryProps
  private languageChangeSubscription!: Subscription

  public loadDictionary(): void {
    this.translateService.loadTranslations().subscribe({
      next: data => {
        this.dictionary = data
      }
    })
  }

  ngOnInit() {
    this.loadDictionary()
  }

  ngOnDestroy() {
    this.languageChangeSubscription.unsubscribe();
  }
}
