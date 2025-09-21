'use client'
import { css } from '@emotion/react'
import type { ComponentProps, ReactNode } from 'react'

/**
 *
 * @prop `(icon)` 세로 20px 크기의 아이콘을 사용하세요
 */
export function Input({ icon, ...props }: { icon?: ReactNode } & ComponentProps<'input'>) {
  return (
    <div
      css={css`
        display: inline-flex;
        width: 100%;
        height: 3.15rem;
        position: relative;
        border-radius: 0.3rem;
        align-items: center;
        margin-bottom: 0.75rem;
      `}
    >
      <span
        css={css`
          cursor: default;
          width: 3.15rem;
          height: 3.15rem;
          text-align: center;
          padding-block: 0.9rem;
          font-size: 1.25rem;
          position: absolute;
        `}
      >
        {icon}
      </span>
      <input
        type="text"
        {...props}
        css={css`
          flex: 1;
          position: absolute;
          margin: 0;
          height: 3.15rem;
          width: 100%;
          font-size: 1rem;
          padding: 0 0.8rem 0 ${icon ? '2.75rem' : '0.8rem'};
          border: 1px solid slategrey;
          border-radius: 0.3rem;
          &:disabled {
            background-color: lightgrey;
            cursor: not-allowed;
          }
          &:focus {
            outline: 1.5px solid slategrey;
            outline-offset: 0.15rem;
          }
        `}
      />
    </div>
  )
}
