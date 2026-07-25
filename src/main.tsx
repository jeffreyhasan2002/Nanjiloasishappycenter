import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// Remove static fallback <meta>/<script> tags (see index.html comment) so
// react-helmet-async's per-page tags are the only ones left once JS runs —
// these statics exist only for crawlers that never execute this script.
document.querySelectorAll('[data-default]').forEach((el) => el.remove())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
