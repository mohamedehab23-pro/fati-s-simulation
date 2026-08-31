import React from 'react'

export default function Navbar() {
  return (
   <>
   <div className='lg:relative z-10 py-10 lg:py-0 sticky top-0 lg:bg-transparent bg-white '>
    <div className='flex gap-3 absolute top-4 end-8'>
        <div>
             <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        strokeWidth={1.5} stroke="currentColor" className="size-12 cursor-pointer bg-gray-100 lg:bg-white text-xl  rounded-full p-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
</button>
        </div>
          
     </div>

   </div>
   </>
  )
}
