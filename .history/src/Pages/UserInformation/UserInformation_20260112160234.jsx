import React from 'react'
import Header from '../../Components/Header/Header'
import ArrowLeft from '../../Components/ArrowLeft/ArrowLeft'
import { Link } from 'react-router-dom'

export default function UserInformation() {
  return (
  <>
  <div className='relative'>
   <Link className='absolute top-4 left-4' to={'/'}> <ArrowLeft/></Link>
    <Header name={'User Information'}/>

<div className='py-6 px-5 shadow my-5 max-w-md mx-auto rounded-2xl'>

<div className='flex gap-4 items-center py-4'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
<p>Cairo,Egypt</p>
</div>
</div>
<button className='px-6 text-2xl flex items-center gap-3 cursor-pointer'>Add An Address <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</button>

  </div>
  
  </>
  )
}
