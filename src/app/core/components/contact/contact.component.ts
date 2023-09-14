import { Component, Input } from '@angular/core';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { WhatsappService } from 'src/app/shared/services/WhatsappService';
import { ContactItems } from 'src/app/shared/types/ContactTypes';
import { DictionaryProps } from 'src/app/shared/types/LanguageTypes';
import { ItemLabels } from 'src/app/shared/types/NavTypes';
import { CONTACT_ITEMS } from 'src/mockData/constants/ContactItems';
import { USERS } from 'src/mockData/constants/GeneralData';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(
    private whatsAppService: WhatsappService
  ) { }

  @Input() dictionary!: DictionaryProps;
  
  public currentLabel: ItemLabels = ItemLabels.CONTACT
  public items: ContactItems = CONTACT_ITEMS

  public footerIcon = faRocket
  public name:string = USERS.DEFAULT

  public call(): void {
    this.whatsAppService.call()
  }
}
