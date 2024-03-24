import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Register from "./components/Register";
import Portfolio from "./components/Portfolio";


export const appRoutes=[
   
    {path:'/login', element: <Login/>},
    {path:'/register',element: <Register/>},
    {path:'/portfolio',element: <Portfolio/>}
]

---------


    import React from 'react';
import NavBar from './NavBar';

function LandingPage(props) {
    return (
        <div>

            <NavBar/>
            <hr/>


        </div>
    );
}

export default LandingPage;

-----

    import React from 'react';
import {Link} from 'react-router-dom'

function NavBar(props) {
    return (
        <div>
            
 <Link to="/login">Login</Link>
 <Link to="/register">Register</Link>
        </div>
    );
}

export default NavBar;



-------

    
