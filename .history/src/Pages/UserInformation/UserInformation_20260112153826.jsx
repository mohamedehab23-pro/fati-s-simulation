import React from 'react'
import Header from '../../Components/Header/Header'
import ArrowLeft from '../../Components/ArrowLeft/ArrowLeft'
import { Link } from 'react-router-dom'
import { PluginContainer } from 'vite'

export default function UserInformation() {
  return (
  <>
  <div className='relative'>
   <Link className='absolute top-4 left-4' to={'/'}> <ArrowLeft/></Link>
    <Header name={'User Information'}/>

<div className='py-6 px-8 shadow my-5 max-w-md mx-auto rounded-2xl'>
<PluginContainer></pcl>

</div>

  </div>
  
  </>
  )
}
