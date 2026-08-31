
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home/Home'
import Categories from './Pages/Categories/Categories'
import Location from './Pages/Location/Location'
import NotFound from './Components/NotFound/NotFound'
import MainImage from './Components/MainImage/MainImage'
import Cart from './Pages/Cart/Cart'
import Products from './Pages/Products/Products'
import UserInformation from './Pages/UserInformation/UserInformation'
import Search from './Pages/Search/Search'

function App() {
let router=createBrowserRouter([
  {path:'',element:<MainLayout/>, children:[
  {index:true, element:<Home/>},
  {path:'categories/:id',element:<Categories/>},
  {path:'arabic-layout',element:<Ar/>},
  {path:'location',element:<Location/>},
  {path:'products/:id',element:<Products/>},
  {path:'user-information',element:<UserInformation/>},
  {path:'cart',element:<Cart/>},
  {path:'search',element:<Search/>},
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
