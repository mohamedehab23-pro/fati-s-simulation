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

   <iframe name='i_frame' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6917.011518192556!2d31.05287693998749!3d29.907338676959977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458533171997ee7%3A0xd738d0e02011b5c3!2z2YPYqNin2KjYrNmJINij2KjZiCDZgtmI2LHYqSDwn5Sl!5e0!3m2!1sen!2seg!4v1771372026383!5m2!1sen!2seg' className='w-full h-[75vh]'  ></iframe>

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
