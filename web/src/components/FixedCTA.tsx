import { css } from '@emotion/react'
import type { ComponentProps } from 'react'
import { BaseBtn, CancelBtn } from './Btn'

type CTAProps =
  | ({ gridType: '1Col'; confirmTxt: string; onConfirm: () => void } & ComponentProps<'button'>)
  | ({
      gridType: '2ColA'
      confirmTxt: string
      cancelTxt: string
      onConfirm: () => void
      onCancel: () => void
    } & ComponentProps<'button'>)
  | ({
      gridType: '2ColB'
      confirmTxt: string
      cancelTxt: string
      onConfirm: () => void
      onCancel: () => void
    } & ComponentProps<'button'>)

export function FixedCTA(props: CTAProps) {
  return (
    <div
      css={css`
        z-index: 99;
        position: fixed;
        padding-bottom: env(safe-area-inset-bottom);
        bottom: 4rem;
        padding-left: 1.5rem;
        width: calc(100% - 1.5rem);
        @media screen and (min-width: 600px) {
          padding-left: 4.5rem;
          bottom: 2rem;
          width: calc(100% - 1.65rem);
        }
      `}
    >
      {(() => {
        switch (props.gridType) {
          case '1Col': {
            return (
              <BaseBtn onClick={props.onConfirm} {...props}>
                {props.confirmTxt}
              </BaseBtn>
            )
          }
          case '2ColA': {
            return (
              <div
                css={css`
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  gap: 0.5rem;
                `}
              >
                <CancelBtn onClick={props.onCancel}>{props.cancelTxt}</CancelBtn>
                <BaseBtn {...props} onClick={props.onConfirm}>
                  {props.confirmTxt}
                </BaseBtn>
              </div>
            )
          }
          case '2ColB': {
            return (
              <div
                css={css`
                  display: grid;
                  grid-template-columns: 2fr 3fr;
                  gap: 0.5rem;
                `}
              >
                <CancelBtn onClick={props.onCancel}>{props.cancelTxt}</CancelBtn>
                <BaseBtn {...props} onClick={props.onConfirm}>
                  {props.confirmTxt}
                </BaseBtn>
              </div>
            )
          }
          default: {
            return null
          }
        }
      })()}
    </div>
  )
}
