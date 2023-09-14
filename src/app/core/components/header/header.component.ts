import { Component } from '@angular/core';
import { MenuService } from 'src/app/shared/services/MenuService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private menuService: MenuService
  ) { 
    this.menuService.isMenuOpen$.subscribe(isOpen => {
      this.isMenuOpen = isOpen
    })
  }

  public isMenuOpen: boolean = false

  public setIsMenuOpen(value: boolean): void {
    this.isMenuOpen = value
  }
}
