import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Header from './Header.jsx'
import Input from './Input.jsx'
import Profile from './Profile.jsx'


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    {/* <App />  */}
    {/* <Input /> */}
    <Profile/>
  </StrictMode>,
)
