import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import MainImage from '../Components/MainImage/MainImage'

export default function MainLayout() {
  return (<>

<div className='h-screen overflow-hidden flex'>
   <div className='w-[30%] overflow-y-auto'>
    <Outlet/>
   </div>
   <div className='w-[70%]'>
    <MainImage/>
   </div>
</div>



  
    </>
  )
}
