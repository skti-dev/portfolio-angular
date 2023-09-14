import { Component, Input } from '@angular/core';
import { NavItemProps } from '../../types/NavTypes';
import { MenuService } from '../../services/MenuService';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {
  @Input() item!: NavItemProps;
  @Input() cb!: (path: string) => void;

  constructor(
    private menuService: MenuService
  ) { }

  public closeMenu(): void {
    window.history.pushState({}, '', `#${this.item.path}`);

    const element = document.getElementById(this.item.path);
    if (element) {
      const offset = 68;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }

    this.menuService.setIsMenuOpen(false);
  }
}
