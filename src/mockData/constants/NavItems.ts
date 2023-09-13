import { NavItems } from "src/app/shared/types/NavTypes";
import { faHome, faInfo, faBullseye, faCode, faAddressBook } from '@fortawesome/free-solid-svg-icons';

export const NAV_ITEMS: NavItems =  [
  {
    path: '',
    label: 'menu_items.home',
    icon: faHome
  },
  {
    path: '',
    label: 'menu_items.about',
    icon: faInfo
  },
  {
    path: '',
    label: 'menu_items.skills',
    icon: faBullseye
  },
  {
    path: '',
    label: 'menu_items.projects',
    icon: faCode
  },
  {
    path: '',
    label: 'menu_items.contact',
    icon: faAddressBook
  }
]
