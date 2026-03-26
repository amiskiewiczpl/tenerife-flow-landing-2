import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './premium/styles.css'
import { ExperiencesPage } from './premium/pages/ExperiencesPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ExperiencesPage />
  </StrictMode>,
)
