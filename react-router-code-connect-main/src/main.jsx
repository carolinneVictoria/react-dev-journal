import './index.css'
import { StrictMode } from 'react'
import { AppRouter } from './router/index.jsx'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
)