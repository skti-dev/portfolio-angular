import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export type ContactProps = {
  src: string
  label: string
  icon: IconDefinition
}

export type ContactItems = Array<ContactProps>
