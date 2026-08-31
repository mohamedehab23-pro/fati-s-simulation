import React from 'react'
import Header from '../../Components/Header/Header'
import ArrowLeft from '../../Components/ArrowLeft/ArrowLeft'
import { Link } from 'react-router-dom'
import sora from '../../assets/best.jpg'
export default function Cart() {
  return (
   <>
   <div className='relative'>
   <Link to={'/'} className='absolute top-4 left-3'> <ArrowLeft/></Link>
    <Header name={'Cart'}/>
   </div>
   <div className='py-3 gap-2 grid lg:grid-cols-2 grid-cols-2 md:grid-cols-3'>


<div  className=' p-4 flex flex-col '>
  <img className='rounded-xl object-cover h-50 w-full' src={sora} alt='' />
  <p className='font-bold py-1 text'>Donuts</p>
</div>

</div>
<div className='p-3'>
     <button className='w-full cursor-pointer py-2 text-white rounded-2xl hover:bg-[#c55682] bg-[#BD4071]'>Check Out</button>

  </div>  
  
   </>
  )
}
