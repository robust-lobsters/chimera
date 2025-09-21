import { OverlayProvider } from 'overlay-kit'
import type { ReactNode } from 'react'
import { GlobalStyle } from 'styles/global'
import { SWRConfig } from 'swr'
export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{}}>
        <OverlayProvider>{children}</OverlayProvider>
      </SWRConfig>
    </>
  )
}
