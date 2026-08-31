import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import MainImage from '../Components/MainImage/MainImage'

export default function MainLayout() {
  return (<>
<Navbar/>
<div className='h-screen lg:overflow-hidden flex flex-col lg:flex-row'>
 
   <div className='xl:w-[30%] lg:w-[] order-2 lg:order-1 lg:overflow-y-auto'>
    <Outlet/>
   </div>
   <div className='xl:w-[70%] order-1 lg:order-2 '>
    <MainImage/>
   </div>
</div>



  
    </>
  )
}
