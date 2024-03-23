
import React, { useState, useEffect } from 'react';

function Demo2(props) {
    const [users,setUsers] = useState([])
    const [uname,setUname]=useState('')
    const [email,setEmail]=useState('')

    useEffect(()=>{
        localStorage.setItem('gfg',JSON.stringify(users))
    },[users])
  
     const addUser=(e)=>{
      e.preventDefault()
      setUsers([
          ...users,{uname,email}
      ])
      setUname('')
      setEmail('')
     }
     const deleteUser=(uname)=>{
              setUsers(users.filter((note)=> note.uname !== uname))
     }
    return (
        <div>
            {users.map((data)=>(
                <div key={data.uname}>
                    {data.uname}-- {data.email}
                    <button onClick={()=> deleteUser(data.uname)}>Delete</button>
                </div>
            ))}
            <hr/>
            <form onSubmit={addUser}>
            <input type='text' placeholder='Enter Username' value={uname}
            onChange={(e)=>setUname(e.target.value)}/>
             <input type='email' placeholder='Enter Email' value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
            <button>Add User</button>
            </form>
        </div>
    );
}

export default Demo2;
