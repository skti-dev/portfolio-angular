export const LANGUAGE_KEY = 'chosen_language'

export enum AvailableLanguages {
  PT_BR = 'pt_br',
  EN = 'en'
}

export enum FlagNames {
  BR = 'br',
  US = 'us'
}

export type DictionaryProps = {
  menu_items: {
    home:string
    about:string
    skills:string
    projects:string
    contact:string
  },
  intro: {
    greetings:string
    presentation:string
    dynamic_text:string
    contact_button:string
  },
  about: {
    title:string
    text_1:string
    text_2:string
    text_separator:string
    text_3:string
    text_4:string
    text_5:string
    button_label:string
  },
  skills: {
    title: string
  }
}
