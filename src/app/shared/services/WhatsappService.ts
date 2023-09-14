import { Injectable } from '@angular/core';
import { LINKS } from 'src/mockData/constants/GeneralData';

@Injectable({
  providedIn: 'root',
})
export class WhatsappService {
  public call(): void {
    window.open(LINKS.WHATSAPP, '_blank')
  }
}