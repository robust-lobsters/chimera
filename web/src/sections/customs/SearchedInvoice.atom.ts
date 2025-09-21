import { atomWithStorage } from 'jotai/utils'

export const SearchedInvoiceAtom = atomWithStorage<string[]>('snax-searched-invoice', [], undefined, {
  getOnInit: true,
})
