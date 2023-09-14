import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private isMenuOpenSubject = new BehaviorSubject<boolean>(false);
  public isMenuOpen$ = this.isMenuOpenSubject.asObservable();

  setIsMenuOpen(isOpen: boolean) {
    this.isMenuOpenSubject.next(isOpen);
  }
}