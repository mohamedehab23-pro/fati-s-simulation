import React from 'react'
import Header from '../../Components/Header/Header'
import ArrowLeft from '../../Components/ArrowLeft/ArrowLeft'
import { Link } from 'react-router-dom'

export default function Cart() {
  return (
   <>
   <div className='relative'>
   <Link to={} className='absolute top-4 left-3'> <ArrowLeft/></Link>
    <Header name={'Cart'}/>
   </div>
   
   </>
  )
}
