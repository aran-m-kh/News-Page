import React from 'react'
import { Link} from 'react-router-dom'
import { useNewsPageContex } from '../../contex/newsPageContex'
function Sidebar() {

    const {isSidebarOpen} = useNewsPageContex()




  return ( 
    
      
      
      
      <div className={`bg-emerald-800 mob:flex mob:flex-col mob:min-h-screen mob:pt-20 mob:px-5 gap-4 ${isSidebarOpen ? 'mob:fixed' : 'mob:hidden'} des:flex des:h-16 des:gap-4 des:p-4`}>
        
        <Link to='/'>home</Link>
        <Link to='/new'>new</Link>
        <Link to='/popular'>popular</Link>
        <Link to='/trending'>trending</Link>
        <Link to='/Categories'>Categories</Link>
    
    </div>
  )
}

export default Sidebar
