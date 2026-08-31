import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GetSpecificProductApi } from '../../Services/GetProduct/GetProduct';
export default function Products() {
  const [products, setProducts] = useState([])
 let {id}= useParams()
 console.log(id);

 const loadProductData=async()=>{
try{
  const SpecificProduct=await GetSpecificProductApi(id)
setProducts(SpecificProduct)
console.log(SpecificProduct);


}catch(err){
  console.log(err);
}
 }

useEffect(()=>{
loadProductData()
},[id])


  return (
   <div className='relative flex flex-col'>
    <Link to={'/'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
        stroke="currentColor" className="size-12 rounded-full absolute bg-white p-3 top-4 left-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg></Link>
{products.map((product)=><>
<img src={product.src}  className='h-120 object-cover w-full' alt={product.name} />
  <div key={product.id} className='p-4'>
      <p className='text-3xl font-bold '>{product.name}</p>
      <div className='py-2'>
        <p className='text-[#94628E]'>{product?.flavor1}</p>
        <p className='text-[#94628E]'>{product?.flavor2}</p>
        <p className='text-[#94628E]'>{product?.flavor3}</p>
        <p className='text-[#94628E]'>{product?.flavor4}</p>
        <p className='text-[#94628E]'>{product?.flavor5}</p>
        <p className='text-[#94628E]'>{product?.flavor6}</p>
      </div>
    <p className='pt-2 border-b border-gray-200 pb-4'>{product.price}</p>
    <div className='p-2 border-b border-gray-200 pb-6'>
      <p className='text-xl py-3 font-semibold'>Special instructions</p>
    <input type="text" className='bg-gray-100/55  w-full py-2 outline-0' placeholder='Add Instructions' />
    </div>
    <div>
      <button 
     className='border text-white bg-[#B01C56] hover:bg-[#d9246c] cursor-pointer flex justify-between items-center my-5  p-3 border-[#BD4071] rounded-full w-full '><p>start ordering </p> <p>{product.price}.00</p>
  </button>
    </div>
  </div>

</>)}
    
   </div>
  )
}
