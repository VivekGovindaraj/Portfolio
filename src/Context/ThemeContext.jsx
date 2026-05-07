import React,{Children, createContext,use,useContext,useState}from 'react'

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const[darkMode,setDarkMode]=useState(true)
  return (
    
    <ThemeContext.Provider value={{darkMode,setDarkMode}}>
        {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)