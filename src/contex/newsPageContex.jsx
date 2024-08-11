import React, {createContext, useContext, useState, useEffect } from 'react'

export const newsPageContex = createContext()

export const useNewsPageContex = () => {
    return useContext(newsPageContex)
} 

export const NewsPageProvider = ({children}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    
    {isSidebarOpen ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden')}
      
    document.body.classList.add('overflow-x-hidden')



    return <newsPageContex.Provider value={{isSidebarOpen, setIsSidebarOpen }}>
        {children}
    </newsPageContex.Provider>
}
