import { atom } from 'jotai'

export type CustomsFormValue = {
  invoice: string
}
export const CustomsFormInit: CustomsFormValue = { invoice: '' }

export const CustomsFormAtom = atom<CustomsFormValue>(CustomsFormInit)
