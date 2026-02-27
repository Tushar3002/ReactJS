import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Header from './Header.jsx'
import Input from './Input.jsx'
import Profile from './Profile.jsx'
import StyledComponents from './StyledComponents.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import DerivedState from './DerivedState.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    {/* <App />  */}
    {/* <Input /> */}
    {/* <Profile/> */}
    {/* <StyledComponents /> */}
    <DerivedState/>
  </StrictMode>,
)
