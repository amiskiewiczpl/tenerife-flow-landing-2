import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './premium/styles.css'
import { ArticlesPage } from './premium/pages/ArticlesPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ArticlesPage />
  </StrictMode>,
)
