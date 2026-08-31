import React,{Children, createContext,use,useContext,useEffect,useState}from 'react'

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const[darkMode,setDarkMode]=useState(() => {

      const savedTheme = localStorage.getItem("theme")

      if(savedTheme){
        return savedTheme === "dark"
      }

      return true
    })

    useEffect(() => {
      localStorage.setItem("theme", darkMode? "dark" :"light")
    }, [darkMode])
  return (
    
    <ThemeContext.Provider value={{darkMode,setDarkMode}}>
        {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)