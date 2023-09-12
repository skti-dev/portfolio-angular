import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  
  public setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value))
  }

  public getItem(key: string): any {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch(err) {
      console.error('Error while getting Local Storage item: ', err)
      return null
    }
  }

  public removeItem(key: string): void {
    if(!localStorage.getItem(key)) return
    localStorage.removeItem(key)
  }

}
