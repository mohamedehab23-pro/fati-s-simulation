import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='bg-white min-h-screen'>
<div className='flex gap-7 items-center'>
    <p className='text-2xl'>NotFound</p>
<Link to={'/'} className='p-3 text-2xl bg-blue-500 rounded-full text-white'>back</Link>
</div>
    </div>
  )
}
