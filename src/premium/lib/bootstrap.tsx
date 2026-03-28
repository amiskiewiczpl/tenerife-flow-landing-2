import type { ReactNode } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initializeAnalytics } from './analytics'

export function mountApp(node: ReactNode, pageType: string) {
  initializeAnalytics({ pageType })

  createRoot(document.getElementById('root')!).render(
    <StrictMode>{node}</StrictMode>,
  )
}
