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

<div className='py-6 px-8 shadow my-5 max-w-md mx-auto rounded-2xl'>
<p className='text-center'> </p>

</div>

  </div>
  
  </>
  )
}
