import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import MainImage from '../Components/MainImage/MainImage'

export default function MainLayout() {
  return (<>

<div className='grid '>
   <div>
     <Outlet/>
   </div>
   <MainImage/>

</div>



  
    </>
  )
}
