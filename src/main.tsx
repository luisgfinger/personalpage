import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './pages/Home'

import '../src/styles/index.css'
import '../src/styles/utility.css'
import Home from './pages/Home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home/>
  </StrictMode>,
)
