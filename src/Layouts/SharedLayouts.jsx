import { Outlet } from "react-router-dom"
import {NavBar,SideBar,Footer} from '../components/index'



const SharedLayouts = () => {
  return (
    <>
     <NavBar/>
     <SideBar/>
     <Outlet/>
     <Footer/>
    </>
  )
}
export default SharedLayouts