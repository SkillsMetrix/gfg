import React, {useState, useEffect} from 'react';

function Register(props) {
    const [formData, setFormData] = useState({})

    const handleData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData);

    }
    const addUser = (e) => {
        e.preventDefault()
        const data = JSON.stringify(formData)
        localStorage.setItem('gfg', data)
    }

    return (
        <div>

            <hr/>
            <form onSubmit={addUser}>
                <input type='text' placeholder='Enter Username' name='uname'
                    onChange={handleData}/>
                <input type='email' placeholder='Enter Email' name='email'
                    onChange={handleData}/>
                <button>Add User</button>
            </form>
        </div>
    );
}

export default Register;
