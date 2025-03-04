import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav class="navbar bg-primary navbar-expand-lg">
            <div class="container-fluid">
                <Link class="navbar-brand" path="/">Edupoly</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/products">Products</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" aria-current="page" to="/countries">Countries</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" aria-current="page" to="/todolist">Todolist</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" aria-current="page" to="/myproducts">MyProducts</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar