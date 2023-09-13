import { Technologies } from "src/mockData/constants/GeneralData"

export type ProjectProps = {
  title: string
  technologies: Array<Technologies>
  link: string
  imgSrc?: string
  imgAlt?: string
}

export type ProjectItems = Array<ProjectProps>
