import { css } from '@emotion/react'
import type { ReactNode } from 'react'
import { Caption } from './Caption'
import { Divider } from './Divider'
import { TopBar } from './TopBar'

/**
 * @prop `(icon)` 이모지를 권장합니다
 * @prop `(title)` 한 줄을 권장하며, 두 줄까지 허용합니다
 * @prop `(subtitle)` 두 줄까지 허용합니다
 */
export function Top({ icon, title, subtitle, nav }: { icon?: string; title?: ReactNode; subtitle?: ReactNode; nav?: boolean }) {
  return (
    <div
      css={css`
        padding-top: 1rem;
        padding-inline: 1.5rem;
        @media screen and (min-width: 600px) {
          margin-inline: 3.15rem;
        }
      `}>
      {nav && <TopBar />}
      <Divider size={1} />
      <div
        css={css`
          margin-bottom: 0.5rem;
        `}>
        <span
          css={css`
            font-size: 2.5rem;
          `}>
          {icon}
        </span>
      </div>

      <h1
        css={css`
          font-size: 1.65rem;
          font-weight: 600;
          line-height: 1.3;
        `}>
        {title}
      </h1>

      {subtitle && (
        <div>
          <Caption
            css={css`
              display: block;
              font-size: 1rem;
              margin-top: 0.35rem;
            `}>
            {subtitle}
          </Caption>
        </div>
      )}
    </div>
  )
}
