import { useState } from 'react'

import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home/Home'
import Categories from './Pages/Categories/Categories'

function App() {
let router=createBrowserRouter([{path:'',Element:<MainLayout/>, children:[
  {index:true, element:<Home/>},
  {path:'categories',element:<Categories/>},
  {path:'location',element:<Location/>}
]}])

  return (
    <>
     <h1 className='text-blue-500'>hello</h1>
    </>
  )
}

export default App
