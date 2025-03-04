import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Products from './features/products/Products';
import Todolist from './features/todolist/Todolist';
import Countries from './features/countries/Countries';
import ProductDetails from './features/products/ProductDetails';
import MyProducts from './features/myproducts/MyProducts';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:"/products",
            element:<Products></Products>,
        },
        {
            path:"/todolist",
            element:<Todolist></Todolist>
        },
        {
            path:"/countries",
            element:<Countries></Countries>
        },
        {
            path:"/products/:id",
            element:<ProductDetails></ProductDetails>
        },
        {
            path:"/myproducts",
            element:<MyProducts></MyProducts>
        }
      ]
    },
  ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

