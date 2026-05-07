import React,{createContext,useState,useContext} from 'react'

const SideBarContext = createContext();

export const SideBarProvider = ({children}) => {
    
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    
    <SideBarContext.Provider value={{menuOpen,setMenuOpen}}>
        {children}
    </SideBarContext.Provider>
  )
}

export const useSideBarContext = () => useContext(SideBarContext)