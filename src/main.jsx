import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { HashRouter } from "react-router-dom";

import { SideBarProvider } from './Context/SideBarContext.jsx'
import { ThemeProvider } from './Context/ThemeContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <ThemeProvider>
      <SideBarProvider>
       <App />
      </SideBarProvider>
      </ThemeProvider>
    </HashRouter>
    
  </StrictMode>,
)
