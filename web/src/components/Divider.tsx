import { css } from '@emotion/react'

/**
 *
 * @prop `(size)` 단 경계는 2, 섹션 경계는 1을 권장합니다.
 */
export function Divider({ size }: { size: number }) {
  return (
    <div
      css={css`
        padding-inline: 1.5rem;
        border-bottom: ${size}rem solid transparent;
      `}
    />
  )
}
