import React, {createContext, useContext, useState } from 'react'

export const newsPageContex = createContext()

export const useNewsPageContex = () => {
    return useContext(newsPageContex)
} 

export const NewsPageProvider = ({children}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)





    return <newsPageContex.Provider value={{isSidebarOpen, setIsSidebarOpen }}>
        {children}
    </newsPageContex.Provider>
}
