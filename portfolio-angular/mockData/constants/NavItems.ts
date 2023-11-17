import { ItemLabels, NavItems } from "src/app/shared/types/NavTypes";
import { faHome, faInfo, faBullseye, faCode, faAddressBook } from '@fortawesome/free-solid-svg-icons';

export const NAV_ITEMS: NavItems =  [
  {
    path: ItemLabels.HOME,
    label: 'menu_items.home',
    icon: faHome
  },
  {
    path: ItemLabels.ABOUT,
    label: 'menu_items.about',
    icon: faInfo
  },
  {
    path: ItemLabels.SKILLS,
    label: 'menu_items.skills',
    icon: faBullseye
  },
  {
    path: ItemLabels.PROJECTS,
    label: 'menu_items.projects',
    icon: faCode
  },
  {
    path: ItemLabels.CONTACT,
    label: 'menu_items.contact',
    icon: faAddressBook
  }
]
