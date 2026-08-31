import React,{createContext,useState,useContext} from 'react'

const SideBarContext = createContext();

export const SideBarProvider = ({children}) => {
    
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")
   return (
    
    <SideBarContext.Provider value={{menuOpen,setMenuOpen, activeSection, setActiveSection}}>
        {children}
    </SideBarContext.Provider>
  )
}

export const useSideBarContext = () => useContext(SideBarContext)