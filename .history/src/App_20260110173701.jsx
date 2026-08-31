import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home/Home'
import Categories from './Pages/Categories/Categories'
import Location from './Pages/Location/Location'
import NotFound from './Components/NotFound/NotFound'
import MainImage from './Components/MainImage/MainImage'

function App() {
let router=createBrowserRouter([{path:'',Element:<MainLayout/>, children:[
  {index:true, element:<Home/>},
  {path:'categories',element:<Categories/>},
  {path:'location',element:<Location/>},
  {path:'main-image',element:<MainImage/>},
  {path:'*',element:<NotFound/>}

]}])

  return (
    <>
     < router={router}>
    </>
  )
}

export default App
