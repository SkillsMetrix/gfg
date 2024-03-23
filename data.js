import React, { useState, useContext } from 'react';
import { createContext } from 'react';
const appContext= createContext()

const udata={
    uname:'admin',email:'admin@mail.com',city:'pune',salary:23456
}
function ContextApp(props) {
    const [users,setUsers]=useState(udata)
    return (
        <div>
            <appContext.Provider value={users}>
            <Employee/>
            </appContext.Provider>
           
        </div>
    );
}
function Employee(props) {
    const empContext= useContext(appContext)
    return (
        <div>
           Employee :{empContext.uname}
           <Salary/>
        </div>
    );
}
function Salary(props) {
    return (
        <div>
            salary
        </div>
    );
}

export default ContextApp;
