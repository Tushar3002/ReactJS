import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import FormwithZod from './FormwithZod.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <FormwithZod/> */}
  </StrictMode>,
)
