import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HamburguerMenuComponent } from '../shared/components/hamburguer-menu/hamburguer-menu.component';
import { ToggleLanguageComponent } from '../shared/components/toggle-language/toggle-language.component';
import { NavMenuComponent } from '../shared/components/nav-menu/nav-menu.component';
import { NavItemComponent } from '../shared/components/nav-item/nav-item.component';
import { IntroComponent } from './components/intro/intro.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillItemComponent } from '../shared/components/skill-item/skill-item.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectItemComponent } from '../shared/components/project-item/project-item.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactItemComponent } from '../shared/components/contact-item/contact-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    HamburguerMenuComponent,
    ToggleLanguageComponent,
    NavMenuComponent,
    NavItemComponent,
    IntroComponent,
    AboutComponent,
    SkillsComponent,
    SkillItemComponent,
    ProjectsComponent,
    ProjectItemComponent,
    ContactComponent,
    ContactItemComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FontAwesomeModule
  ]
})
export class CoreModule { }
