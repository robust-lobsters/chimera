import { BottomSheet } from 'components/BottomSheet'
import { overlay } from 'overlay-kit'
import type { ReactNode } from 'react'

export function useBottomSheet(id?: string) {
  const overlayId = id || crypto.randomUUID()
  return {
    open: (content: ReactNode) =>
      overlay.open(
        ({ unmount }) => (
          <BottomSheet size="full" unmount={unmount}>
            <>{content}</>
          </BottomSheet>
        ),
        { overlayId }
      ),
  }
}
