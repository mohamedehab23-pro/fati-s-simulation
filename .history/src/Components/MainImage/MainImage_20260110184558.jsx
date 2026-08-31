import React from 'react'
import logo from '../../assets/logo.png'
export default function MainImage () {
  return (
    <div className='min-h-screen relative flex justify-center items-center  fixed-img'>
       

        <div className='flex flex-col items-center'> 
            <img src={logo} className='w-50' alt="logo" />
        <p className='text-white  text-lg'>Fati's</p>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

        </div>
        
    </div>
  )
}
