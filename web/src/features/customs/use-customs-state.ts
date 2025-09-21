import { useBooleanState } from '@frfla/react-hooks'
import { ENV } from 'config/env'
import { useEffect, useState } from 'react'
import type { CustomsData, CustomsResponseData } from '@chimera/shared'
import { http } from 'utils/http'

export const useCustoms = (billNo: string): [CustomsData | null, () => void, boolean, unknown] => {
  const [state, setState] = useState<CustomsData | null>(null)
  const [err, setErr] = useState<unknown>(undefined)
  const [isLoading, setTrue, setFalse] = useBooleanState()

  const url = ENV.SERVER_ROOT

  useEffect(() => {
    if (!isLoading) return
    try {
      ;(async () => {
        const res = await http.post<{ billNo: string }, CustomsResponseData>(url, 'json', {
          billNo,
        })
        setState(res?.cargCsclPrgsInfoQryRtnVo ?? null)
        setFalse()
      })()
    } catch (E) {
      setFalse()
      setErr(E)
    }
  }, [billNo, isLoading, setFalse, url])

  const submit = setTrue

  return [state, submit, isLoading, err]
}
