import './index.css'
import './premium/styles.css'
import { ArticlesPage } from './premium/pages/ArticlesPage'
import { mountApp } from './premium/lib/bootstrap'

mountApp(<ArticlesPage />, 'articles')
