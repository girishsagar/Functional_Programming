import React, { Component } from "react";
import { Card,  InputBase } from "@material-ui/core";
import { withRouter } from "react-router-dom";

class Getnote extends Component{
    super(props){
        this.state={

        }
    }

    render(){
        return(
            <div>
                <Card>
                    <InputBase
                    multiline
                    placeholder/>
                </Card>
            </div>
        )
    }
}


export default withRouter(Getnote)