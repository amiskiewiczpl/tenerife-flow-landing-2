/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ANALYTICS_WEBHOOK_URL?: string
  readonly VITE_CONTACT_WEBHOOK_URL?: string
  readonly VITE_PARTNER_WEBHOOK_URL?: string
  readonly VITE_ARTICLE_SIGNUP_WEBHOOK_URL?: string
  readonly VITE_DEFAULT_BOOKING_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
