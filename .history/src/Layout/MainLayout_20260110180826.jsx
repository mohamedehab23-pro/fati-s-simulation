import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import MainImage from '../Components/MainImage/MainImage'

export default function MainLayout() {
  return (<>

<div className='grid grid-cols-12 '>
   
<div className='col-span-3 '>    
     <Outlet/>

</div>  

     <div className='col-span-9 st'>
        <MainImage/>
     </div>
 

</div>



  
    </>
  )
}
