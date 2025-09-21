import { css } from '@emotion/react'
import { ChevronLeft } from 'lucide-react'
import { useNavigate, useParams } from 'react-router'
import { BaseBtn } from './Btn'

export function TopBar() {
  const { '*': catchAll } = useParams()
  const navigate = useNavigate()

  return (
    <>
      <div
        css={css`
          padding-top: env(safe-area-inset-top);
          margin-bottom: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        {!catchAll ? (
          <div
            css={css`
              display: flex;
              gap: 0.5rem;
              align-items: center;
            `}
          >
            <BaseBtn
              onClick={() => navigate('/')}
              css={css`
                margin: 0;
                padding: 0;
                border: none;
                background-color: transparent;
                color: slategrey;
                width: 1.5rem;
                height: 1.5rem;
              `}
            >
              <ChevronLeft size={24} />
            </BaseBtn>
          </div>
        ) : (
          <span />
        )}
        <div />
      </div>
    </>
  )
}
