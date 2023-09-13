import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export type SkillProps = {
  title: string
  icon: IconDefinition | string
  certificateUrl?: string
  customTextClass?: string
}

export type SkillItems = Array<SkillProps>