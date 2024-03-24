import React from 'react';
import {Link} from 'react-router-dom'

function NavBar(props) {
    return (
        <div className='container'>


            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                        <Link to="/login">Login</Link>
                    </a>

                </li>
                <li class="nav-item">

                    <a class="nav-link active" aria-current="page" href="#">
                        <Link to="/register">Register</Link>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
