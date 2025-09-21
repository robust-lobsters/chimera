import { atom } from 'jotai'
import type { CargCsclPrgsInfoQryRtnVo } from '@chimera/shared'

export const customsResultAtom = atom<CargCsclPrgsInfoQryRtnVo | null>(null)
