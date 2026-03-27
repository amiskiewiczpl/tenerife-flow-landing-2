import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './premium/styles.css'
import { ContactPage } from './premium/pages/ContactPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContactPage />
  </StrictMode>,
)
