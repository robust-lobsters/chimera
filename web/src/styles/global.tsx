import { css, Global } from '@emotion/react'
import normalizer from 'emotion-normalize'
import 'styles/font.css'

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${normalizer}
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        html,
        body {
          font-size: 100%;
          line-height: 1;
          font-family: 'Mona Sans', 'Gothic A1', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: slategreyscale;
        }
        #root {
          min-height: 100dvh;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        button,
        input[type='submit'] {
          color: inherit;
          padding: 0;
          margin: 0;
          background-color: transparent;
          font-size: 100%;
        }
        input,
        textarea {
          color: #304050;
          font-family: 'IBM Plex Mono', 'Gothic A1', sans-serif;
          padding: 0;
          margin: 0;
          background-color: transparent;
          font-size: 100%;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          font-size: 100%;
          margin: 0;
          padding: 0;
          color: #304050;
          font-weight: normal;
        }
      `}
    />
  )
}
