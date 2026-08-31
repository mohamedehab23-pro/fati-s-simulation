import React from 'react'
import ArrowLeft from '../../Components/ArrowLeft/ArrowLeft'
import { Link } from 'react-router-dom'

export default function Search() {
  return (
   <>
   <div className='relative border-b border-gray-200 pb-6 p-2'>
    <Link className='absolute top-4 left-2' to={'/'}> <ArrowLeft/></Link>
        <input type="text" className='bg-gray-100/55 ms-9 w-[90%] py-2 px outline-0' placeholder='Search' />

   </div>
   
   
   </>
  )
}
