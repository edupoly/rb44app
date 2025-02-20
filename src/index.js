import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Aboutus from './Aboutus';
import Countries from './Countries';
import CountryDetails from './CountryDetails';
import Products from './Products';
import ProductDetails from './ProductDetails';
const router = createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        children:[
            {
                path:"/home",
                element:<Home></Home>
            },
            {
                path:"/aboutus",
                element:<Aboutus></Aboutus>
            },
            {
                path:"/countries",
                element:<Countries></Countries>,
                children:[
                    {
                        path:"/countries/countryDetails/:country",
                        element:<CountryDetails></CountryDetails>
                    }
                ]

            },
            {
                path:"/products",
                element:<Products></Products>
            },
            {
                path:"/productDetails",
                element:<ProductDetails></ProductDetails>
            }
            
        ]
    }
    
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

