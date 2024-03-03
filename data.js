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
//delete all

deleteAll=()=>{
    this.setState(()=>{
        return {
            userData:[]
        }
    })
}

render(){
      return(
            <div>
                <Users udata={this.state.userData}
                da={this.deleteAll}
                hasData={this.state.userData.length > 0}
                />
                <Header hdata={this.state.headerData}/>
                <p>MainApp Component</p>
                <AddUser au={this.addUser}/>
                <Footer fdata={this.state.footerData}/>
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
                    this.props.udata.map((ud) =>  <User key={ud} userNew={ud}/>)
                }
              <button disabled={!this.props.hasData} onClick={this.props.da}>DeleteAll</button>
            </div>
           
        )
    }
}
