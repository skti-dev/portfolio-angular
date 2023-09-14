import { Component, EventEmitter, Output } from '@angular/core';
import { MenuService } from '../../services/MenuService';

@Component({
  selector: 'app-hamburguer-menu',
  templateUrl: './hamburguer-menu.component.html',
  styleUrls: ['./hamburguer-menu.component.scss']
})
export class HamburguerMenuComponent {
  @Output() currentState = new EventEmitter<boolean>();

  constructor(
    private menuService: MenuService
  ) {
    this.menuService.isMenuOpen$.subscribe(isOpen => {
      this.isMenuOpen = isOpen
    })
  }

  public isMenuOpen: boolean = false;

  toggleIsMenuOpen() {
    this.isMenuOpen = !this.isMenuOpen;
    this.currentState.emit(this.isMenuOpen);
  }
}
