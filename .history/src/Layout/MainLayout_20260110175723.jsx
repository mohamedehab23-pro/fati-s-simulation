import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import MainImage from '../Components/MainImage/MainImage'

export default function MainLayout() {
  return (<>

<div className='flex flex-row'>
   <div>
     <Outlet/>
   </div>
  <div className=''>
     <MainImage/>
  </div>

</div>



  
    </>
  )
}
