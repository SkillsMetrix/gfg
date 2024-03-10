
import React, { useState } from 'react';

function Demo2(props) {
    const [users,setUsers] = useState([])
    const [uname,setUname]=useState('')
  
     const addUser=(e)=>{
      e.preventDefault()
      setUsers([
          ...users,{uname}
      ])
     }
    return (
        <div>
            {users.map((data)=>(
                <div>
                    {data.uname}
                </div>
            ))}
            <hr/>
            <form onSubmit={addUser}>
            <input type='text' placeholder='Enter Username' value={uname}
            onChange={(e)=>setUname(e.target.value)}/>
            <button>Add User</button>
            </form>
        </div>
    );
}

export default Demo2;
