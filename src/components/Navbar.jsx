import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../features/user/userSlice';
import { socket } from '..';

function Navbar() {
    var {user} = useSelector(state=>state);
    var navigate = useNavigate();
    var dispatch = useDispatch()
    console.log(user);
    function logoutFn(){
        socket.emit("updateUserStatus",{username:user.username,status:'offline'})
        navigate("/login")
        dispatch(logout())
    }
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">{user.username} PolyLeads</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        {
                            user.username && (<>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/home"><b>{user.username.toUpperCase()}</b>Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/messenger">Messenger</Link>
                                </li>
                                <li class="nav-item">
                                    <b class="nav-link btn btn-danger" onClick={()=>{logoutFn()}}>Logout</b>
                                </li>
                            </>)
                        }
                        {
                            !user.username && (
                                <li class="nav-item">
                                    <Link class="nav-link" to="/login">Login</Link>
                                </li>
                            )
                        }
                        
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar