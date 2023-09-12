import { Component, Input } from '@angular/core';
import { NavItemProps } from '../../types/NavTypes';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {
  @Input() item!: NavItemProps;
}
