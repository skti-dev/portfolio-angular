import { ContactItems } from "src/app/shared/types/ContactTypes";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { LINKS, USERS, PHONE_NUMBER } from "./GeneralData";

export const CONTACT_ITEMS: ContactItems = [
  {
    label: USERS.GITHUB,
    icon: faGithub,
    src: LINKS.GITHUB
  },
  {
    label: USERS.DEFAULT,
    icon: faLinkedin,
    src: LINKS.LINKEDIN
  },
  {
    label: PHONE_NUMBER,
    icon: faWhatsapp,
    src: LINKS.WHATSAPP
  },
  {
    label: USERS.EMAIL,
    icon: faEnvelope,
    src: LINKS.EMAIL
  }
]