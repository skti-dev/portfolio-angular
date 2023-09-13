import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/shared/services/TranslateService';
import { DictionaryProps } from 'src/app/shared/types/LanguageTypes';
import { ItemLabels } from 'src/app/shared/types/NavTypes';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit, OnDestroy {
  constructor(
    private translateService: TranslateService
  ) {
    this.languageChangeSubscription = this.translateService.languageChanged$.subscribe(() => {
      this.loadDictionary();
    });
  }

  public currentLabel: ItemLabels = ItemLabels.HOME
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
