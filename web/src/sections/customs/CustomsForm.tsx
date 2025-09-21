import { Divider } from 'components/Divider'
import { FixedCTA } from 'components/FixedCTA'
import { Input } from 'components/Input'
import { Section } from 'components/Section'
import { useCustoms } from 'features/customs/use-customs-state'
import { useAtom, useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { CustomsFormAtom } from './CustomsForm.atom'
import { customsResultAtom } from './CustomsResult.atom'

export function CustomsForm() {
  const [f, setForm] = useAtom(CustomsFormAtom)
  const [state, submit, isLoading, error] = useCustoms(f.invoice)
  const setCustomsResult = useSetAtom(customsResultAtom)

  useEffect(() => {
    setCustomsResult(state)
  }, [state])

  return (
    <Section>
      <Divider size={1} />
      <form onSubmit={e => e.preventDefault()}>
        <Input
          name="invoice"
          value={f.invoice}
          onChange={e =>
            setForm(prev => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <FixedCTA
          disabled={isLoading || Boolean(!f.invoice.trim().length)}
          gridType="1Col"
          onConfirm={submit}
          confirmTxt="앙닝"
        />
      </form>
    </Section>
  )
}
