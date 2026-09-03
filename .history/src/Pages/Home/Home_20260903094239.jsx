import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { GetData } from '../../Services/GetData/GetData'
import Header from '../../Components/Header/Header'

export default function Home() {
  const [mainData, setMainData] = useState([])
  const [error, setError] = useState(null)
async function data(){
    try{ 
      const response=await GetData()
    console.log(response);
    
    setMainData(response)
    }catch(err){
// console.log(err);
setError(err)
    }
}


useEffect(()=>{
data()


},[])
  return (<>
  
  
  <div className='p-3  '>
  <Link to={'/order-mode'}><Header name={'Delivery'}/></Link>  
<div className='py-3 gap-2 grid lg:grid-cols-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-3'>
{mainData.map((category)=>
<Link key={category.id} to={'/categories/'+category.id}>
<div  className=' p-4 flex flex-col '>
  <img className='rounded-xl object-cover h-50 w-full' src={category.src} alt={category.name} />
  <p className='font-bold py-1'>{category.name}</p>
</div></Link>

)}

</div>
<p className='  font-bold pb-2 '>Fati's</p>
 <div className='flex pb-6 pt-3 items-center justify-between border-b border-gray-100'>

 <div className='flex gap-3 '>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
<Link to={''}><p className='font-semibold'>Branches</p></Link>

 </div>
 <div>
  <Link to={''}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg></Link>

 </div>

 </div>
 <div className='flex justify-between items-center border-b border-gray-100 pb-3 pt-4'>
<Link to={''}>Privacy Policy</Link>
<Link to={''}>Shipping & Return Policy</Link>
 </div>
 <Link to={''} className='  pt-3'><p className='text-center pt-6 pb-12'>Powered by Zyda®</p></Link>
 
  </div>
  </>
 
  )
}
