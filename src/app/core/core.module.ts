import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FontAwesomeModule
  ]
})
export class CoreModule { }
