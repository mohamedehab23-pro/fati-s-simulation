import React from 'react'
import { Link } from 'react-router-dom'
import ArrowLeft from '../../Components/ArrowLeft/ArrowLeft'
import Header from '../../Components/Header/Header'

export default function OrderMode() {
  return (
    <>

<div className='relative '>
  <Link className='absolute top-4 left-3' to={'/'}><ArrowLeft/></Link>
  <p className='border-b border-gray-200 text-center py-3 font-semibold text-lg'> Order Mode</p>
</div>
<div className='pt-2 px-6'>
  <Header name={'Delivery'}/>

</div>
<div className='relative'>

   <iframe name='i_frame' src='https://www.google.com/maps?q=fatis&amp;z=14&amp;t=m&amp;hl=en&amp;output=embed"' className='w-full h-[75vh]'  ></iframe>

  </div> 
<div className='p-3'>
  {/* <button className='p-3 mt-2 rounded-4xl w-full bg-gray-100 text-center'>We Don't Deliver To This Address </button> */}
<button 
     className='border text-white bg-[#B01C56] text-center hover:bg-[#d9246c]
      cursor-pointer  my-2  py-2 border-[#BD4071] rounded-full w-full '><p>save </p> 
  </button>
</div>
    </>
  )
}
