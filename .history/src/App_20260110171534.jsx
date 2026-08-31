import { useState } from 'react'

import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'

function App() {
let router=createBrowserRouter([{path:'',Element:<MainLayout/>, children:[
  
]}])

  return (
    <>
     <h1 className='text-blue-500'>hello</h1>
    </>
  )
}

export default App
