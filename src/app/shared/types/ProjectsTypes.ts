export enum AvailableTechnologies {
  JS = 'JavaScript',
  TS = 'TypeScript',
  REACT = 'React',
  ANGULAR = 'Angular',
  VUE = 'Vue',
  VUETIFY = 'Vuetify',
  FIREBASE = 'Firebase',
  BOOTSTRAP = 'Bootstrap',
  HTML = 'HTML 5',
  CSS = 'CSS 3',
  SASS = 'SCSS'
}

export type ProjectProps = {
  title: string
  technologies: Array<AvailableTechnologies>
  link: string
  imgSrc?: string
  imgAlt?: string
}

export type ProjectItems = Array<ProjectProps>
