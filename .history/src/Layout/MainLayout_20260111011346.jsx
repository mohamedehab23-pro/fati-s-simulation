import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import MainImage from '../Components/MainImage/MainImage'

export default function MainLayout() {
  return (<>

<div className='h-screen lg:overflow-hidden lg:flex'>
   <div className='lg:w-[30%] overflow-y-auto'>
  
    <Outlet/>
   </div>
   <div className='lg:w-[70%] order-f lg:order-0'>
    <MainImage/>
   </div>
</div>



  
    </>
  )
}
