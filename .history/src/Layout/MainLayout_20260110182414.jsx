import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import MainImage from '../Components/MainImage/MainImage'

export default function MainLayout() {
  return (<>

<div className='min-h-screen flex'>
   <div className='w-[30%]'>
    <Outlet/>
   </div>
{/* <div className='col-span-3 '>    
     <Outlet/>

</div>  

     <div className='col-span-9 '>
        <MainImage/>
     </div> */}
 

</div>



  
    </>
  )
}
