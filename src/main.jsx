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
// import AllProducts from './Components/Pages/AllProducts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/home',
        element: <Home></Home>,
      
      },
      
      {
        path: '/about',
        element: <About></About>
      },
      
    ]

  },
  {
    path:'/products',
    element:<Main></Main>,
    // children:[
    //   {
    //     path:'/products',
    //     element:<AllProducts></AllProducts>
    //   }
    // ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider> 
  </React.StrictMode>,
)
