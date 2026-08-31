import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
   <>
   <div className='lg:relative z-10 py-10 lg:py-0 sticky top-0 lg:bg-transparent bg-white '>
    <div className='flex gap-3 absolute top-4 end-8'>
          <Link to={''}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        strokeWidth={1.5} stroke="currentColor" className="size-12 cursor-pointer bg-gray-100 lg:bg-white text-xl  rounded-full p-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
</Link>
          <Link to={''} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
           stroke="currentColor" className="size-11 cursor-pointer bg-gray-100 lg:bg-white rounded-full p-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</Link>
          <Link ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="size-11 cursor-pointer bg-gray-100 lg:bg-white rounded-full p-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg></Link>
       <button><p className="size-11 cursor-pointer bg-gray-100 lg:bg-white text-xl  rounded-full p-2">ع</p></button>
     
     </div>

   </div>
   </>
  )
}
