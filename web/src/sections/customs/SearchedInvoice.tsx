import { useAtom, useSetAtom } from 'jotai'
import { CustomsFormAtom } from './CustomsForm.atom'
import { SearchedInvoiceAtom } from './SearchedInvoice.atom'

export function SearchedInvoice() {
  const [invoices, setInvoices] = useAtom(SearchedInvoiceAtom)
  const setForm = useSetAtom(CustomsFormAtom)

  const handleInvoiceTag = (i: string) => {
    const INV = i.trim()
    setForm(prev => ({
      ...prev,
      invoice: INV,
    }))
    setInvoices(prev => {
      return [INV, ...prev.filter(x => x !== INV)]
    })
  }
  return (
    <>
      <ul>
        {invoices.map(i => (
          <button type="button" key={i} onClick={() => handleInvoiceTag(i)}>
            {i}
          </button>
        ))}
      </ul>
    </>
  )
}
