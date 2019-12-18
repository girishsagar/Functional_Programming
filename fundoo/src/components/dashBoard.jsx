import React, { Component } from "react";
import { Card,  InputBase } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import appBar from "../components/appBar"
import DrawerNav from "../components/drawerNavigation"


class Dashboard extends Component{
    super(props){
        this.state={

        }
    }


    render(){
        return(
            <div>
                <p>><h1>Hi Well Com to hellll...!!!!!!</h1></p>

<DrawerNav/>
<appBar/>
            </div>

)
    }
}


export default  withRouter(Dashboard)