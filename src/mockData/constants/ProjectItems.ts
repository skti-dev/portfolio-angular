import { AvailableTechnologies, ProjectItems } from "src/app/shared/types/ProjectsTypes";

export const PROJECTS: ProjectItems = [
  {
    title: 'Skate Dice',
    technologies: [
      AvailableTechnologies.JS,
      AvailableTechnologies.REACT,
      AvailableTechnologies.CSS,
      AvailableTechnologies.HTML
    ],
    link: 'https://skate-dice.vercel.app/',
    imgSrc: '/assets/projects/skate-dice-cover.png',
    imgAlt: 'Skate Dice home page'
  },
  {
    title: 'Pokedex',
    technologies: [
      AvailableTechnologies.TS,
      AvailableTechnologies.ANGULAR,
      AvailableTechnologies.SASS,
      AvailableTechnologies.HTML
    ],
    link: 'https://skti-dev.github.io/pokedex-angular/',
    imgSrc: '/assets/projects/pokedex-cover.png',
    imgAlt: 'Pokedex home page'
  },
  {
    title: 'Vanilla JS Game',
    technologies: [
      AvailableTechnologies.JS,
      AvailableTechnologies.CSS,
      AvailableTechnologies.HTML
    ],
    link: 'https://skti-dev.github.io/vanilla-js-game/',
    imgSrc: '/assets/projects/vanilla-js-game-cover.png',
    imgAlt: 'Vanilla JS Game home page'
  },
  {
    title: 'Shopping Cart',
    technologies: [
      AvailableTechnologies.REACT,
      AvailableTechnologies.TS,
      AvailableTechnologies.BOOTSTRAP,
      AvailableTechnologies.HTML
    ],
    link: 'https://github.com/skti-dev/shopping-cart#readme',
    imgSrc: '/assets/projects/shopping-cart-cover.png',
    imgAlt: 'Shopping cart home page'
  },
  {
    title: 'Simple Dashboard',
    technologies: [
      AvailableTechnologies.VUE,
      AvailableTechnologies.JS,
      AvailableTechnologies.VUETIFY,
      AvailableTechnologies.FIREBASE,
      AvailableTechnologies.HTML
    ],
    link: 'https://github.com/skti-dev/vuetify/blob/master/README.md',
    imgSrc: '/assets/projects/simple-dashboard-cover.png',
    imgAlt: 'Simple dashboard home page'
  }
]