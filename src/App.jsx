import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useLazyGetUserDetailsByTokenQuery } from './services/userApi';
import { useDispatch } from 'react-redux';
import { updateUser } from './features/user/userSlice';
import { socket } from '.';

function App() {
  var navigate = useNavigate();
  var dispatch = useDispatch();

var [getUserDetailsByTokenFn] = useLazyGetUserDetailsByTokenQuery();
  useEffect(()=>{
    if(window.localStorage.getItem('token')){
      getUserDetailsByTokenFn(window.localStorage.getItem('token'))
      .then((res)=>{
        console.log(res)
        dispatch(updateUser(res))
        socket.emit("updateUserStatus",{username:res.data.username})
      })
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
