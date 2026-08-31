import React from 'react'
import Header from '../../Components/Header/Header'
import ArrowLeft from '../../Components/ArrowLeft/ArrowLeft'

export default function Cart() {
  return (
   <>
   <div className='relative'>
    <ArrowLeft/>
    <Header name={'Cart'}/>
   </div>
   
   </>
  )
}
