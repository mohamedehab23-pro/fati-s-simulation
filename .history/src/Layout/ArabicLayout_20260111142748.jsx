import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import MainImage from '../Components/MainImage/MainImage'

export default function MainLayout() {
  return (<>
<Navbar/>
<div className='h-screen lg:overflow-hidden flex flex-col lg:flex-row'>
 
  
   <div className='lg:w-[70%] order-1 lg:order-2 '>
    <MainImage/>
   </div>
</div>



  
    </>
  )
}
