import { css } from '@emotion/react'
import type { ComponentProps } from 'react'

export function Caption(props: ComponentProps<'span'>) {
  return (
    <span
      css={css`
        font-size: 0.9rem;
        font-weight: 500;
        line-height: 1.3;
        color: slategrey;
      `}
      {...props}
    />
  )
}
