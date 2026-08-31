import React from 'react'
import { Outlet } from 'react-router-dom'
import MainImage from '../Components/MainImage/MainImage'

export default function MainLayout() {
  return (
    <div className=' flex '>
<div>
    <Outlet/>


    </div>
  )
}
