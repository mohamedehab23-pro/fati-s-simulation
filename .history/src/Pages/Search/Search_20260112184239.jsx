import React from 'react'
import ArrowLeft from '../../Components/ArrowLeft/ArrowLeft'
import { Link } from 'react-router-dom'

export default function Search() {
  return (
   <>
   <div className='relative  p-2'>
    <Link className='' to={'/'}> <ArrowLeft/></Link>
   </div>
   
   
   </>
  )
}
