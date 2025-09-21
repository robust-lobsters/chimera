import { css } from '@emotion/react'
import { type ComponentProps, type PointerEvent, useEffect, useMemo, useRef, useState } from 'react'
import { clamp } from '@chimera/shared'

interface Props extends ComponentProps<'div'> {
  unmount: () => void
  size: 'full' | 'half'
}

export function BottomSheet({ size, unmount, ...props }: Props) {
  const openSnap = size === 'full' ? 1 : 0.5
  const SNAP_POINTS = useMemo(() => (size === 'full' ? [0, 1] : [0, 0.5, 1]), [size])

  const [pos, setPos] = useState<number>(0)
  const [dragging, setDragging] = useState(false)

  const sheetRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef(false)
  const startYRef = useRef(0)
  const startPosRef = useRef(0)

  useEffect(() => {
    const id = requestAnimationFrame(() => setPos(openSnap))
    return () => cancelAnimationFrame(id)
  }, [openSnap])

  const handlePointerDown = (e: PointerEvent) => {
    setDragging(true)
    isDraggingRef.current = true
    startYRef.current = e.clientY
    startPosRef.current = pos
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    setDragging(false)

    const snapped = SNAP_POINTS.reduce((acc, s) => (Math.abs(s - pos) < Math.abs(acc - pos) ? s : acc), SNAP_POINTS[0])

    if (snapped === 0) {
      setPos(0)
      unmount()
      return
    }
    setPos(snapped)
  }

  const handlePointerMove = (e: PointerEvent) => {
    if (!isDraggingRef.current) return
    const h = sheetRef.current?.getBoundingClientRect().height ?? 1
    const dy = e.clientY - startYRef.current
    const delta = -(dy / h)
    setPos(() => clamp(0, startPosRef.current + delta, 1))
  }

  const handlePointerCancel = () => {
    isDraggingRef.current = false
    setDragging(false)
    const snapped = SNAP_POINTS.reduce((acc, s) => (Math.abs(s - pos) < Math.abs(acc - pos) ? s : acc), SNAP_POINTS[0])
    if (snapped === 0) {
      setPos(0)
      unmount()
    } else {
      setPos(snapped)
    }
  }

  return (
    <div
      css={css`
        z-index: 9999;
        position: fixed;
        inset: 0;
        pointer-events: none;
        visibility: ${pos === 0 ? 'visible' : 'hidden'};
        pointer-events: ${pos === 0 ? 'auto' : 'none'};
      `}>
      <div
        css={css`
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          transition: opacity 150ms ease;
          pointer-events: auto;
          opacity: ${pos};
        `}
        onClick={() => {
          setPos(0)
          unmount()
        }}
        aria-hidden>
        <div
          ref={sheetRef}
          css={css`
            transform: translateY(${(1 - pos) * 3.5}%);
            opacity: ${pos === 0 ? 0 : 1};
            transition: ${dragging ? 'none' : 'transform 0.15s ease, opacity 0.1s ease'};
            position: absolute;
            left: 0;
            right: 0;
            top: 1.5rem;
            margin: 0;
            height: calc(100dvh);
            background: #fff;
            border-top-left-radius: 0.6rem;
            border-top-right-radius: 0.6rem;
            pointer-events: auto;
            display: flex;
            flex-direction: column;
            padding-bottom: env(safe-area-inset-bottom);
            @media screen and (min-width: 600px) {
              height: calc(100dvh);
            }
          `}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          role="dialog"
          aria-modal="true">
          <div>
            <button
              css={css`
                width: 100%;
                text-align: center;
                border: none;
                padding: 0.5rem 0 0.5rem 0;
                touch-action: none;
                cursor: grab;
              `}
              onPointerDown={handlePointerDown}
              aria-label="바텀시트 핸들">
              <span
                css={css`
                  display: inline-block;
                  width: 3rem;
                  height: 0.25rem;
                  border-radius: 999px;
                  background: slategrey;
                  transition: scale ease 0.15s;
                  &:active {
                    scale: 0.85;
                  }
                `}
              />
            </button>
            <div
              css={css`
                padding: 1.5rem;
              `}>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
