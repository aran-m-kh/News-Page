import { Link} from 'react-router-dom'
import { useNewsPageContex } from '../../contex/newsPageContex'
import  {motion, AnimatePresence} from "framer-motion"
function Sidebar() {

    const {isSidebarOpen, setIsSidebarOpen} = useNewsPageContex()

    return (
      <div className='flex justify-center items-center z-50 des:hidden'>
        <div onClick={() => setIsSidebarOpen(!isSidebarOpen)} className={`${isSidebarOpen ? 'fixed' : 'absolute'} flex top-6 left-5 z-40  w-14 h-10 p-2`}>
          {isSidebarOpen ? <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg"><g fill="#FFFFFF" fillRule="evenodd"><path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z"/><path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z"/></g></svg> : <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fillRule="evenodd"><path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z"/><path d="M0 0h40v3H0z"/></g></svg>}
          
        </div>

      <AnimatePresence>
      {isSidebarOpen && (
      <div className='flex flex-col'><motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
      transition={{ duration: 0.3 }}
        
        

        className={`bg-emerald-800 text-white font-InterRegular z-10 w-[140px] absolute left-0 top-0 flex flex-col h-full pt-20 px-5 gap-4`}>
        
        <Link to='/'>home</Link>
        <Link to='/new'>new</Link>
        <Link to='/popular'>popular</Link>
        <Link to='/trending'>trending</Link>
        <Link to='/Categories'>Categories</Link>
    </motion.div>
    <AnimatePresence><motion.div initial={{ opacity: 0 }}
      animate={{ opacity : 0.5 }}
      exit={{ opacity : 0 }}
      transition={{ duration: 0.3 }}   onClick={() => setIsSidebarOpen(!isSidebarOpen)} className='bg-black w-screen h-screen opacity-50 absolute z-0 right-0 top-0'></motion.div></AnimatePresence>
    </div>
    )}
  </AnimatePresence> 
  </div>
  
  
    )
}
export default Sidebar