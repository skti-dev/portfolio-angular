import { ProjectItems } from "src/app/shared/types/ProjectsTypes";
import { Technologies } from "./GeneralData";
import { environment } from "src/enviroments/enviroment";

export const PROJECTS: ProjectItems = [
  {
    title: 'Skate Dice',
    technologies: [
      Technologies.JAVASCRIPT,
      Technologies.REACT,
      Technologies.CSS,
      Technologies.HTML
    ],
    link: 'https://skate-dice.vercel.app/',
    imgSrc: `${environment.path}/assets/projects/skate-dice-cover.png`,
    imgAlt: 'Skate Dice home page'
  },
  {
    title: 'Sonix Aparelhos Auditivos',
    technologies: [
      Technologies.JAVASCRIPT,
      Technologies.REACT,
      Technologies.SASS,
      Technologies.HTML
    ],
    link: 'https://sonix.com.br/',
    imgSrc: `${environment.path}/assets/projects/sonix-cover.png`,
    imgAlt: 'Sonix home page'
  },
  {
    title: 'Expocond',
    technologies: [
      Technologies.JAVASCRIPT,
      Technologies.REACT,
      Technologies.SASS,
      Technologies.HTML
    ],
    link: 'http://expocondjpa.com.br/',
    imgSrc: `${environment.path}/assets/projects/expocond-cover.png`,
    imgAlt: 'Expocond home page'
  },
  {
    title: 'JAC Grupo',
    technologies: [
      Technologies.JAVASCRIPT,
      Technologies.REACT,
      Technologies.SASS,
      Technologies.HTML
    ],
    link: 'https://jacgruporj.com.br/',
    imgSrc: `${environment.path}/assets/projects/jac-cover.png`,
    imgAlt: 'JAC Grupo home page'
  },
  {
    title: 'Pokedex',
    technologies: [
      Technologies.TYPESCRIPT,
      Technologies.ANGULAR,
      Technologies.SASS,
      Technologies.HTML
    ],
    link: 'https://skti-dev.github.io/pokedex-angular/',
    imgSrc: `${environment.path}/assets/projects/pokedex-cover.png`,
    imgAlt: 'Pokedex home page'
  },
  {
    title: 'Vanilla JS Game',
    technologies: [
      Technologies.JAVASCRIPT,
      Technologies.CSS,
      Technologies.HTML
    ],
    link: 'https://skti-dev.github.io/vanilla-js-game/',
    imgSrc: `${environment.path}/assets/projects/vanilla-js-game-cover.png`,
    imgAlt: 'Vanilla JS Game home page'
  },
  {
    title: 'Shopping Cart',
    technologies: [
      Technologies.REACT,
      Technologies.TYPESCRIPT,
      Technologies.BOOTSTRAP,
      Technologies.HTML
    ],
    link: 'https://github.com/skti-dev/shopping-cart#readme',
    imgSrc: `${environment.path}/assets/projects/shopping-cart-cover.png`,
    imgAlt: 'Shopping cart home page'
  },
  {
    title: 'ACFJ (Em construção)',
    technologies: [
      Technologies.JAVASCRIPT,
      Technologies.REACT,
      Technologies.SASS,
      Technologies.HTML
    ],
    link: 'https://instagram.com/skti.z',
    imgSrc: `${environment.path}/assets/projects/acfj-cover.jpeg`,
    imgAlt: 'ACFJ home page'
  },
]