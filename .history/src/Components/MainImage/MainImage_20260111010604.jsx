import React from 'react'
import logo from '../../assets/logo.png'
import Navbar from '../Navbar/Navbar'
export default function MainImage () {
  return (
    <Navbar/>
    <div className='min-h-screen relative flex justify-center items-center  fixed-img'>


        <div className='flex flex-col items-center'> 
            <img src={logo} className='w-50' alt="logo" />
        <p className='text-white  text-lg'>Fati's</p>
         

        </div>
        
    </div>
  )
}
