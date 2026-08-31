import React from 'react'
import ArrowLeft from '../../Components/ArrowLeft/ArrowLeft'
import { Link } from 'react-router-dom'

export default function Search() {
  return (
   <>
   <div >
    <Link className='top-4 left-3' to={'/'}><ArrowLeft/></Link>
   </div>
   
   
   </>
  )
}
