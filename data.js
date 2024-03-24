import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

export default function NavBar() {
   const token  = localStorage.getItem("token")
   const navigate = useNavigate()
    return (
        <nav>
        <div className="nav-wrapper #673ab7 deep-purple">
          <Link to="/" className="brand-logo left">React GraphQL App for persistent</Link>
          <ul id="nav-mobile" className="right">
            {
              token ?
              <>
               <li><Link to="/profile">Profile</Link></li>
               <li><Link to="/create">Create</Link></li>
               <li><button className="red btn" onClick={()=>{
                 localStorage.removeItem("token")
                 navigate('/login')
               }}>Logout</button></li>

              </>:
              <>
               <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
               </>
            }
            
           
          </ul>
        </div>
      </nav>
    )
}
----



    import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [formData, setFormData] = useState({})

    const Navigate = useNavigate();
    const handleData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData);

    }
    const addUser = (e) => {
        e.preventDefault()
        const userData = localStorage.getItem('gfg')
        const data = JSON.parse(userData)
        console.log(data);
        if(data.uname === formData.uname &&
            data.email === formData.email){
            Navigate('/Portfolio')
        }
        
      
    }

  return (
    <div>
      <form onSubmit={addUser}>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          onChange={handleData}
        />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={handleData}
        />
        <button>Login</button>
      </form>
    </div>
  );
}
