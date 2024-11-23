
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
    <Navbar/>
    <div className='flex-grow'>
      <Outlet/>
    </div>
    <Footer/>
    </div>
  )
}

export default MainLayout