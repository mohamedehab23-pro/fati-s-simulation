import React from 'react'
import logo from '../../assets/logo.png'
export default function MainImage () {
  return (
    <div className='min-h-screen flex justify-center items-center  fixed-img'>
        <div className='flex flex-col items-center'> 
            <img src={logo} className='w-50' alt="logo" />
        <p className='text-white text-2xl'>Fati's</p>
        </div>
    </div>
  )
}
