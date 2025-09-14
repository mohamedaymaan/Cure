import {  createHashRouter, RouterProvider } from 'react-router'
import './App.css'
import Layout from './Layout/Layout'
import Home from './Pages/Home/Home'



function App() {

const router = createHashRouter([
  {
    path:'/',
    element:<Layout /> ,
    children:[
  {
    index:true, 
    element:<Home/>
  }, 
    {
      path:'home', 
      element:<Home/>
    }
  ]},
])
   return (
    <>
    <RouterProvider router={router} /> 
      </>
  )
}

export default App