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
    title: 'Simple Dashboard',
    technologies: [
      Technologies.VUE,
      Technologies.JAVASCRIPT,
      Technologies.VUETIFY,
      Technologies.FIREBASE,
      Technologies.HTML
    ],
    link: 'https://github.com/skti-dev/vuetify/blob/master/README.md',
    imgSrc: `${environment.path}/assets/projects/simple-dashboard-cover.png`,
    imgAlt: 'Simple dashboard home page'
  }
]