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


------


   import logo from './logo.svg';
import './App.css';
 import { useRoutes } from 'react-router-dom'
 import {appRoutes} from './routes'
import LandingPage from './components/LandingPage';
function App() {
  const element= useRoutes(appRoutes)
  return (
    <div className="App">
      <LandingPage/>
      {element}
    </div>
  );
}

export default App;




-------

    
