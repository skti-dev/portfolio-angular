import { SkillItems } from "src/app/shared/types/SkillsTypes";
import { faSquareJs, faAngular, faReact, faVuejs, faCss3Alt, faGitAlt, faSass, faBootstrap, faNodeJs, faFigma, faHtml5 } from '@fortawesome/free-brands-svg-icons';

export const SKILL_ITEMS: SkillItems = [
  {
    title: 'JavaScript',
    icon: faSquareJs
  },
  {
    title: 'TypeScript',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" x="0px" y="0px" viewBox="0 0 50 50"><path fill="currentColor" d="M45,4H5C4.447,4,4,4.448,4,5v40c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V5C46,4.448,45.553,4,45,4z M29,26.445h-5V42h-4	V26.445h-5V23h14V26.445z M30.121,41.112v-4.158c0,0,2.271,1.712,4.996,1.712c2.725,0,2.62-1.782,2.62-2.026	c0-2.586-7.721-2.586-7.721-8.315c0-7.791,11.25-4.717,11.25-4.717l-0.14,3.704c0,0-1.887-1.258-4.018-1.258s-2.9,1.013-2.9,2.096	c0,2.795,7.791,2.516,7.791,8.141C42,44.955,30.121,41.112,30.121,41.112z"></path></svg>`
  },
  {
    title: 'React',
    icon: faReact
  },
  {
    title: 'Angular',
    icon: faAngular
  },
  {
    title: 'Vue',
    icon: faVuejs
  },
  {
    title: 'HTML 5',
    icon: faHtml5
  },
  {
    title: 'CSS 3',
    icon: faCss3Alt
  },
  {
    title: 'SASS',
    icon: faSass
  },
  {
    title: 'Bootstrap',
    icon: faBootstrap
  },
  {
    title: 'Git',
    icon: faGitAlt
  },
  {
    title: 'NodeJS',
    icon: faNodeJs
  },
  {
    title: 'SQL & NoSQL',
    icon: `<svg height="32" viewBox="0 0 1792 1792" width="32" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M896 768q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-170q119 84 325 127t443 43zm0 768q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-170q119 84 325 127t443 43zm0-384q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-170q119 84 325 127t443 43zm0-1152q208 0 385 34.5t280 93.5 103 128v128q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-128q0-69 103-128t280-93.5 385-34.5z"/></svg>`
  },
  {
    title: 'Figma',
    icon: faFigma
  }
]