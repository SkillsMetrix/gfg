import React, { Component } from "react";
import axios from "axios";
const URL = "https://jsonplaceholder.typicode.com/users";
export default class RestApp extends Component {
  state={
    users:[]
  }
  componentDidMount() {
    axios
      .get(URL)
      .then((response) => response.data)
      .then((data) => {
      
        this.setState({users:data})
      });
  }
  render() {
    return <div>
     {this.state.users.map((udata)=> (
       <div>
         {udata.username} -- {udata.email}
       </div>
     ))}
    </div>;
  }
}
