import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hamburguer-menu',
  templateUrl: './hamburguer-menu.component.html',
  styleUrls: ['./hamburguer-menu.component.scss']
})
export class HamburguerMenuComponent implements OnInit {
  @Input() initialState: boolean = false;
  @Output() currentState = new EventEmitter<boolean>();

  public isMenuOpen: boolean = false;

  ngOnInit() {
    this.isMenuOpen = this.initialState || false;
  }

  toggleIsMenuOpen() {
    this.isMenuOpen = !this.isMenuOpen;
    this.currentState.emit(this.isMenuOpen);
  }
}
