import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { HamburguerMenuComponent } from '../shared/components/hamburguer-menu/hamburguer-menu.component';
import { ToggleLanguageComponent } from '../shared/components/toggle-language/toggle-language.component';
import { NavMenuComponent } from '../shared/components/nav-menu/nav-menu.component';
import { NavItemComponent } from '../shared/components/nav-item/nav-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    HamburguerMenuComponent,
    ToggleLanguageComponent,
    NavMenuComponent,
    NavItemComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FontAwesomeModule
  ]
})
export class CoreModule { }
