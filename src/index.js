import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AddLead from './features/leads/AddLead';
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/home",
            element:<Home></Home>
        },
        {
            path:"/addLead",
            element:<AddLead></AddLead>
        },
      ]
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

