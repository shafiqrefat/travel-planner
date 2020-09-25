import React from 'react';
import logo from '../../Images/Logo.png'

const Header = () => {
    return (
        <div>
                   <header style={{backgroundColor: 'white'}}>
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent container">
                <a class="navbar-brand" href="/home">
                    <img src={logo} alt="" style={{height:'40px'}}/>
                </a>
                <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon "></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search your Destination" id="searchBox" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>


                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0 ">
                        <li class="nav-item">
                            <a class="nav-link" href="#news">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#destination">Destination</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#blog">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a href="/login"><button class="btn btn-warning" style={{width:'100px'}}> Login</button></a>
                        </li>
                    </ul>

                </div>
            </nav >
        </header > 
        </div>
    );
};

export default Header;