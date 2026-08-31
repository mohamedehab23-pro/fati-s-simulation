import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({name}) {
  return (
<>
<Link to={'location'}><p className='p-3 text-center text-xl border-b-3 border-[#B01C56] font-semibold'>Delivery</p></Link>

</>
  )
}
