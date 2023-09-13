import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AvailableLanguages } from '../types/LanguageTypes';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private translations: any = {};
  private currentLanguage: AvailableLanguages = AvailableLanguages.PT_BR
  private languageChanged = new Subject<AvailableLanguages>();

  constructor(private http: HttpClient) {}

  public languageChanged$ = this.languageChanged.asObservable();

  public loadTranslations(): Observable<any> {
    return this.http.get(`/mockData/languages/${this.currentLanguage}.json`).pipe(
      map(data => {
        this.translations = data;
        return data;
      }),
      catchError(() => {
        console.error('Failed to load translations.');
        return of({});
      })
    );
  }

  public translate(key: string): string {
    const keys = key.split('.');
    let current = this.translations;

    for (const k of keys) {
      if (current.hasOwnProperty(k)) {
        current = current[k];
      } else {
        return key;
      }
    }

    return current;
  }

  public setLanguage(language: AvailableLanguages): void {
    this.currentLanguage = language
    this.languageChanged.next(language)
  }

  public getLanguage(): AvailableLanguages {
    return this.currentLanguage
  }
}
