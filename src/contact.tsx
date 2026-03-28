import './index.css'
import './premium/styles.css'
import { ContactPage } from './premium/pages/ContactPage'
import { mountApp } from './premium/lib/bootstrap'

mountApp(<ContactPage />, 'contact')
