import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import View from './View.jsx';
import Update from './Update.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Home from './Home.jsx';
import Authprovider, { Authcontextprovider } from './Provider/Authprovider.jsx';
import Users from './Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        index: true,
        element: <App></App>
      },
      {
        path: '/viewproduct',
        element: <View></View>,
        loader: () => fetch('http://localhost:5000/products')
      },
      {
        path: '/updateproduct/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/usersdata',
        element: <Users></Users>,
        loader: () => fetch('http://localhost:5000/userserver')
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>,
)
