import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function App() {
  var navigate = useNavigate();
  useEffect(()=>{
    if(window.localStorage.getItem('token')){
      navigate("/home")
    }
    else{
      navigate("/login")
    }
  },[])
  return (
    <div>
      <h1 className="bg-success">Hello Leads</h1>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
