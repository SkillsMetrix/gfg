import { Component } from "react";




export default class User extends Component{

    render(){
        return(
            <div>
                {this.props.userNew}
            </div>
           
        )
    }
}



import { Component } from "react";
import User from "./User";




export default class Users extends Component{

    render(){
        return(
            <div>
                {
                    this.props.udata.map((ud) =>  <User userNew={ud}/>)
                }
              
            </div>
           
        )
    }
}




import { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddUser from "./AddUser";
import Users from "./Users";




export default class MainApp extends Component{

    render(){
        const headerData='Welcome to Header'
        const footerData='Welcome to Footer'
        const userData=['Admin','Manager','QA']
        return(
            <div>
                <Users udata={userData}/>
                <Header hdata={headerData}/>
                <p>MainApp Component</p>
                <AddUser/>
                <Footer fdata={footerData}/>
            </div>
           
        )
    }
}
