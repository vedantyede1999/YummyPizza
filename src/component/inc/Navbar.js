import React from 'react';
import {Link} from 'react-router-dom';
import CartIcon from '../images/cartIcon.svg';
import './icon.css';

function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link to="/home" class="navbar-brand">Yummy Pizza</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/home" class="nav-link active">Home</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Menu</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to="/pizza" class="nav-link">Pizza</Link></li>
                                <li><Link to="/breveges" class="nav-link">Breveges</Link></li>
                                <li><Link to="/dessert" class="nav-link">Dessert</Link></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <Link to="/login" class="nav-link">LogIn</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                <Link to="/check_out" class="nav-link"><img src={CartIcon} alt='cartIcon' className='icon' /></Link>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                </nav>
            </div>
    </nav>
    );
}

export default Navbar;