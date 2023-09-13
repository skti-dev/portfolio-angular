import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export type SkillProps = {
  title: string
  icon: IconDefinition | string
}

export type SkillItems = Array<SkillProps>