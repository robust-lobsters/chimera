import { css } from '@emotion/react'
import { PlaneLandingIcon } from 'lucide-react'
import type { ComponentProps } from 'react'
import { Link } from 'react-router'

export function FullMenu({ open, ...props }: { open: boolean; onClose: () => void } & ComponentProps<'div'>) {
  return (
    <div
      {...props}
      css={css`
        background-color: rgba(250, 250, 250, 0.9);
        visibility: ${open ? 'visible' : 'hidden'};
        pointer-events: ${open ? 'auto' : 'none'};
        z-index: 999;
        width: 100vw;
        height: 100dvh;
        padding: 4rem 0.75rem 4rem 0.75rem;
        position: fixed;
        left: 0;
        top: 0;
        transform: translateY(${open ? 0 : '5%'});
        opacity: ${open ? 1 : 0};
        transition: transform 0.15s, opacity ease-in-out 0.15s;
        @media screen and (min-width: 600px) {
          transform: translateX(${open ? 0 : '-5%'});
          width: clamp(300px, 50vw, 400px);
          left: 3.15rem;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          justify-items: center;
        `}
      >
        <ul>
          <li>
            <Link to="/customs">
              <span>
                <PlaneLandingIcon />
              </span>
              Customs
            </Link>
          </li>
          <li>
            <Link to="/issues">Issues</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
