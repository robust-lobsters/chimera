import { css } from '@emotion/react'
import { GithubIcon, LinkIcon, MenuIcon, SunIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { BaseBtn } from './Btn'
import { FullMenu } from './FullMenu'

export function Navigation() {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    const handlePointerDownCapture = (e: PointerEvent) => {
      if (!open) return
      const el = e.target as Element
      const inside = el.closest('[data-menu-root],[data-menu-trigger]')
      if (!inside) setOpen(false)
    }
    document.addEventListener('pointerdown', handlePointerDownCapture, true)
    return () => document.removeEventListener('pointerdown', handlePointerDownCapture, true)
  }, [open])

  return (
    <>
      <div
        css={css`
          z-index: 9999;
          height: 3.15rem;
          padding-bottom: env(safe-area-inset-bottom);
          padding-inline: 1.5rem;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: absolute;
          bottom: 0;
          background-color: white;
          border-top: 1px solid aliceblue;
          @media screen and (min-width: 600px) {
            left: 0;
            height: 100dvh;
            padding-block: 1.5rem;
            justify-content: flex-end;
            width: 3.15rem;
            gap: 0.75rem;
            flex-direction: column-reverse;
            border-top: none;
            border-right: 1px solid aliceblue;
          }
        `}
      >
        <BaseBtn css={CategoryBtn()}>
          <GithubIcon strokeWidth={1.5} size={20} />
        </BaseBtn>
        <BaseBtn css={CategoryBtn()}>
          <LinkIcon strokeWidth={1.5} size={20} />
        </BaseBtn>
        <BaseBtn css={CategoryBtn()}>
          <SunIcon strokeWidth={1.5} size={20} />
        </BaseBtn>
        <BaseBtn
          data-menu-trigger
          onClick={e => {
            e.stopPropagation()
            setOpen(v => !v)
          }}
          css={CategoryBtn()}
        >
          <MenuIcon strokeWidth={1.5} size={20} />
        </BaseBtn>
      </div>
      <FullMenu data-menu-root={true} open={open} onClose={() => setOpen(false)} />
    </>
  )
}

function CategoryBtn() {
  return css`
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    color: slategrey;
    width: 1.5rem;
    height: 1.5rem;
  `
}
