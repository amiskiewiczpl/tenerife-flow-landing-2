import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './premium/styles.css'
import { PartnersPage } from './premium/pages/PartnersPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PartnersPage />
  </StrictMode>,
)
