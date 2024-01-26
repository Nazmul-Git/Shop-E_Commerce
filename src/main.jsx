import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from './Components/Main.jsx';
import About from './Components/Pages/About.jsx';
import Home from './Components/Home/Home.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import AllProducts from './Components/Pages/AllProducts.jsx';
import Contact from './Components/Pages/Contact.jsx';
import Cart from './Components/Pages/Cart.jsx';
import Login from './Components/Login/Login.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import Order from './Components/Pages/Order.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/home')
      },
      {
        path:'/home',
        element: <Home></Home>,
        loader:()=>fetch('http://localhost:5000/home')
      
      },
      
      {
        path: '/about',
        element: <About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
      
    ]

  },
  {
    path:'/products',
    element:<Main></Main>,
    children:[
      
      {
        path:'/products',
        element:<AllProducts></AllProducts>,
        loader:()=>fetch('http://localhost:5000/products')
      },
      {
        path:':id',
        element:<Cart></Cart>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
      },
      
    ]
  },
  
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/orders',
    element:<PrivateRoute><Order></Order></PrivateRoute>
  },
  
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider> 
  </React.StrictMode>,
)
