import React, { Component, useState, useEffect } from "react";
import axios from "axios";
 const URL = "https://jsonplaceholder.typicode.com/users";
function RestApp (){
  
  const [users,setUsers]= useState([])
  useEffect(()=>{
    axios
    .get(URL)
    .then((response) => response.data)
    .then((data) => {
    setUsers(data)
    });
  },[])
  
   
    return <div>
    {users.map((data)=>(
      <div key={data.email}>
       {data.name} --- {data.email}
      </div>
    ))}
    </div>;
  }
export default RestApp
