import { Component } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { TranslateService } from 'src/app/shared/services/TranslateService';
import { DictionaryProps } from 'src/app/shared/types/LanguageTypes';
import { ItemLabels } from 'src/app/shared/types/NavTypes';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(
    private translateService: TranslateService
  ) {
    this.languageChangeSubscription = this.translateService.languageChanged$.subscribe(() => {
      this.loadDictionary();
    });
  }

  public currentLabel: ItemLabels = ItemLabels.ABOUT
  public dictionary!: DictionaryProps
  private languageChangeSubscription!: Subscription
  public icon = faBook

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
