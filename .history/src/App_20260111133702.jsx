
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home/Home'
import Categories from './Pages/Categories/Categories'
import Location from './Pages/Location/Location'
import NotFound from './Components/NotFound/NotFound'
import MainImage from './Components/MainImage/MainImage'
import Cart from './Pages/Cart/Cart'

function App() {
let router=createBrowserRouter([
  {path:'',element:<MainLayout/>, children:[
  {index:true, element:<Home/>},
  {path:'categories/:',element:<Categories/>},
  {path:'location',element:<Location/>},
  {path:'cart',element:<Cart/>},
  {path:'main-image',element:<MainImage/>},
  {path:'*',element:<NotFound/>}

]}

])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
