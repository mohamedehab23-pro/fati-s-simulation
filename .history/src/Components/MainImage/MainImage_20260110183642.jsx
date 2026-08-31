import React from 'react'
import logo from '../../assets/logo.png'
export default function MainImage () {
  return (
    <div className='min-h-screen flex justify-center items-center  fixed-img'>
        <img src={logo} className='w-50' alt="logo" />
        <p>Fati'</p>
    </div>
  )
}
