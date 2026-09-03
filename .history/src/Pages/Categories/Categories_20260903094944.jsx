import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'
import { GetSpecificCategoryApi } from '../../Services/GetData/GetData';
import Header from '../../Components/Header/Header';
import { GetCategoryApi } from '../../Services/GetCategory/GetCategory';
import ArrowLeft from '../../Components/ArrowLeft/ArrowLeft';


export default function Categories() {
  const [specificCategory, setSpecificCategory] = useState(null)
  const [categoryProducts, setCategoryProducts] = useState([])
 let {id}= useParams() 
 console.log(id);



const loadCategoryData=async()=>{
try{
const categoryData=await GetSpecificCategoryApi(id)
setSpecificCategory(categoryData)
 
const products=await GetCategoryApi(categoryData?.name)
setCategoryProducts(products)
}catch(err){
  
console.log(err);

}
}

  useEffect(()=>{
  loadCategoryData()

  },[id])

 

  return (<>
     <div className='p-3  '>
     <div className='relative'>
       <Link to={'/'} className='absolute top-1/4' ><ArrowLeft/>
</Link>
    <Header name={specificCategory?.name}/>
     </div>
<div className='py-3 gap-2 flex flex-wrap '>
{categoryProducts.map((category)=>

<div key={category.id} className=' p-4 flex flex-col w bg-yellow-200 grow'>
  <Link to={'/products/'+category.id}>
  <img className='rounded-xl object-cover h-50 w-full' src={category.src} alt={category.name} />
  <p className='font-bold py-1'>{category?.name}</p>
 </Link>

  <button  className='border hover:text-white hover:bg-[#BD4071] cursor-pointer flex justify-between items-center p-1 my-2 xl:px-3 xl:py-2 border-[#BD4071] rounded-full  text-[#BD4071]'><p>{category.price}</p>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

  </button>
</div>)}

</div>



</div>

  </>)

  
}
