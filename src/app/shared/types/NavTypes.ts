import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

export type NavItemProps = {
  path: string,
  label: string,
  icon: IconDefinition
}

export type NavItems = Array<NavItemProps>
