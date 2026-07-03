import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@flaticon/flaticon-uicons/css/regular/rounded.css'
import '@flaticon/flaticon-uicons/css/regular/straight.css'
import '@flaticon/flaticon-uicons/css/solid/rounded.css'
import '@flaticon/flaticon-uicons/css/thin/straight.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
