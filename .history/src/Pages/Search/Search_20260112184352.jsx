import React from 'react'
import ArrowLeft from '../../Components/ArrowLeft/ArrowLeft'
import { Link } from 'react-router-dom'

export default function Search() {
  return (
   <>
   <div className='relative  p-2'>
    <Link className='absolute top-4 left-3' to={'/'}> <ArrowLeft/></Link>
        <input type="text" className='bg-gray-100/55  w-[90%] py-2 outline-0' placeholder='Add Instructions' />

   </div>
   
   
   </>
  )
}
