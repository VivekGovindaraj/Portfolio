import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SideBarProvider } from './Context/SideBarContext.jsx'
import { ThemeProvider } from './Context/ThemeContext.jsx'
ThemeProvider


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
      <SideBarProvider>
       <App />
      </SideBarProvider>
      </ThemeProvider>
    </BrowserRouter>
    
  </StrictMode>,
)
