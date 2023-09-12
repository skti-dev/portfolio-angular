import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { HamburguerMenuComponent } from '../shared/components/hamburguer-menu/hamburguer-menu.component';
import { ToggleLanguageComponent } from '../shared/components/toggle-language/toggle-language.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    HamburguerMenuComponent,
    ToggleLanguageComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FontAwesomeModule
  ]
})
export class CoreModule { }
