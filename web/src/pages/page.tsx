import { css } from '@emotion/react'
import { BaseBtn } from 'components/Btn'
import { FixedCTA } from 'components/FixedCTA'
import { Section } from 'components/Section'
import { Top } from 'components/Top'
import { Link } from 'react-router'

export function StartPage() {
  return (
    <>
      <Top />
      <Section>
        <div
          css={css`
            display: grid;
            gap: 0.5rem;
            grid-template-columns: 1fr 1fr;
          `}>
          <Link to="/customs" style={{ textDecoration: 'none' }}>
            <BaseBtn>해외직구 통관추적</BaseBtn>
          </Link>
          <Link to="/rss-subs" style={{ textDecoration: 'none' }}>
            <BaseBtn>RSS 구독</BaseBtn>
          </Link>
        </div>
      </Section>
    </>
  )
}
