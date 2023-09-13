import { Component, Input } from '@angular/core';
import { ContactProps } from '../../types/ContactTypes';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent {
  @Input() item!: ContactProps
}
