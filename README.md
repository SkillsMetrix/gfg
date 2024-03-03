import {Component} from "react";


export default class AddUser extends Component {

    addUser = (e) => {
        e.preventDefault()

        const data = e.target.elements.uname.value
         this.props.au(data)
    }

    render() {
        return (
            <div>
                <form onSubmit={
                    this.addUser
                }>
                    <input type='text' name='uname' placeholder='Enter Name' required/>
                    <button>adduser</button>
                    <p></p>
                </form>
            </div>

        )
    }
}





-------



import { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddUser from "./AddUser";
import Users from "./Users";

export default class MainApp extends Component{

    state={
          headerData:'Welcome to Header',
         footerData:'Welcome to Footer',
         userData:[]
    }
// adding the user

addUser=(data)=>{
    this.setState((prevState)=>{

        return{
            userData:prevState.userData.concat(data)
        }
    })
}

render(){
      return(
            <div>
                <Users udata={this.state.userData}/>
                <Header hdata={this.state.headerData}/>
                <p>MainApp Component</p>
                <AddUser au={this.addUser}/>
                <Footer fdata={this.state.footerData}/>
            </div>
           
        )
    }
}
