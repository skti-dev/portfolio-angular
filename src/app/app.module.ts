import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

import { LocalStorageService } from './shared/services/LocalStorageService';
import { TranslateService } from './shared/services/TranslateService';
import { MenuService } from './shared/services/MenuService';
import { WhatsappService } from './shared/services/WhatsappService';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LocalStorageService, TranslateService, MenuService, WhatsappService],
  bootstrap: [AppComponent]
})
export class AppModule { }
