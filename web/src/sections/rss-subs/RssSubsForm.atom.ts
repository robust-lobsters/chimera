import { atom } from 'jotai'

export const RssSubsFormAtom = atom<{ key: string; url: string }>({ key: '', url: '' })
