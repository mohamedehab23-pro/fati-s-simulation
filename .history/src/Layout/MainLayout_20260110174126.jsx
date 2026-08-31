import React from 'react'
import { Outlet } from 'react-router-dom'
import MainImage from '../Components/MainImage/MainImage'
import Navbar from '../Components/Navbar/Navbar'

export default function MainLayout() {
  return (<>
    <div className='  '>
<Navbar/>
    <Outlet/>


    </div>
    </>
  )
}
