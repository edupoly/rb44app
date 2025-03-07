import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';

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
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
