import React from 'react'
import Header from '../../Components/Header/Header'
import ArrowLeft from '../../Components/ArrowLeft/ArrowLeft'
import { Link } from 'react-router-dom'

export default function Cart() {
  return (
   <>
   <div className='relative'>
   <Link className='absolute top-4 left-'> <ArrowLeft/></Link>
    <Header name={'Cart'}/>
   </div>
   
   </>
  )
}
