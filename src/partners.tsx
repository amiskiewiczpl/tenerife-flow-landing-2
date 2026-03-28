import './index.css'
import './premium/styles.css'
import { PartnersPage } from './premium/pages/PartnersPage'
import { mountApp } from './premium/lib/bootstrap'

mountApp(<PartnersPage />, 'partners')
