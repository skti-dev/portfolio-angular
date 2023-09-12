import { Component } from '@angular/core';
import { faHome, faInfo, faBullseye, faCode, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { NavItems } from '../../types/NavTypes';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  private items: NavItems = [
    {
      path: '',
      label: 'Home',
      icon: faHome
    },
    {
      path: '',
      label: 'Sobre mim',
      icon: faInfo
    },
    {
      path: '',
      label: 'Habilidades',
      icon: faBullseye
    },
    {
      path: '',
      label: 'Projetos',
      icon: faCode
    },
    {
      path: '',
      label: 'Contato',
      icon: faAddressBook
    }
  ]

  public getItems(): NavItems {
    return this.items
  }
}
