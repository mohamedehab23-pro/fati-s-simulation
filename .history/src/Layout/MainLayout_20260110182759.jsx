import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import MainImage from '../Components/MainImage/MainImage'

export default function MainLayout() {
  return (<>

<div className='h-screen overflow-hidden flex'>
   <div className='w-1/4 overflow-y-auto'>
    <Outlet/>
   </div>
   <div className='w-3/4'>
    <MainImage/>
   </div>
</div>



  
    </>
  )
}
