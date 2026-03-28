import './index.css'
import './premium/styles.css'
import { ExperiencesPage } from './premium/pages/ExperiencesPage'
import { mountApp } from './premium/lib/bootstrap'

mountApp(<ExperiencesPage />, 'experiences')
