import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../features/user/userSlice';

function Navbar() {
    var {user} = useSelector(state=>state);
    var dispatch = useDispatch()
    console.log(user);
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">PolyLeads</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        {
                            user.username && (<>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/addLead">Add Lead</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/allLeads">All Leads</Link>
                                </li>
                                <li class="nav-item">
                                    <b class="nav-link btn btn-danger" onClick={()=>{dispatch(logout())}}>Logout</b>
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