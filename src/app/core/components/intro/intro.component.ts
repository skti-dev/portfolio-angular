import { Component, Input } from '@angular/core';
import { WhatsappService } from 'src/app/shared/services/WhatsappService';
import { DictionaryProps } from 'src/app/shared/types/LanguageTypes';
import { ItemLabels } from 'src/app/shared/types/NavTypes';
import { environment } from 'src/enviroments/enviroment';
import { USERS } from 'src/mockData/constants/GeneralData';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  constructor(
    private whatsappService: WhatsappService
  ) {  }

  @Input() dictionary!: DictionaryProps;

  public currentLabel: ItemLabels = ItemLabels.HOME

  public getFirstName(): string {
    return USERS.FIRST_NAME
  }

  public returnImagePath(): string {
    return `${environment.path}/assets/profile-picture.png`
  }

  public call(): void {
    this.whatsappService.call()
  }
}
