import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavItems } from '../../types/NavTypes';
import { NAV_ITEMS } from 'src/mockData/constants/NavItems';
import { TranslateService } from '../../services/TranslateService';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit, OnDestroy {
  constructor(
    private translateService: TranslateService
    ) {
      this.languageChangeSubscription = this.translateService.languageChanged$.subscribe(() => {
        this.loadItems();
      });
    }
    
    private items!: NavItems
    private languageChangeSubscription!: Subscription

  ngOnInit() {
    this.loadItems()
  }

  ngOnDestroy() {
    this.languageChangeSubscription.unsubscribe();
  }

  public loadItems(): void {
    this.translateService.loadTranslations().subscribe({
      next: () => {
        this.setItems(NAV_ITEMS.map(item => ({
          ...item,
          label: this.translateService.translate(item.label)
        })))
      }
    })
  }
  
  public setItems(items: NavItems): void {
    this.items = items
  }
  
  public getItems(): NavItems {
    return this.items
  }
}
