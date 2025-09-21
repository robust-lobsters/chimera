import { Router } from 'pages/routes'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
)
