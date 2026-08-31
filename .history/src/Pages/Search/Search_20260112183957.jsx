import React from 'react'
import ArrowLeft from '../../Components/ArrowLeft/ArrowLeft'
import { Link } from 'react-router-dom'

export default function Search() {
  return (
   <>
   <div className='relative flex '>
    <Link className='top-4 left-3 absolute' to={'/'}><ArrowLeft/></Link>
    <input type="text"  className='absolute top-4 left-8 border'/>
   </div>
   
   
   </>
  )
}
