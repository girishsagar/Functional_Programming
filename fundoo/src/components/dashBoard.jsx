import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Navigation from "./appBar";
import Getnote from "./getNote";
import Notes from "./note";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      color: "",
      getNotesProps:false,
    };
  }
 
  colorChange=(e)=>{
    // console.log("aaaaaaaaaaa"+e)
    this.setState({color:e})
    console.log("AAAAAAAAAAAAAAA"+e)
  }
  initiateGetNotes=(getDataProps)=>{
    console.log("getDataProps",getDataProps);
    this.setState({
      getNotesProps:getDataProps
    })
  }
  render() {
    return (
      <div>
        <Navigation />
        <Notes initiateGetNotes={this.initiateGetNotes} colorChange={this.colorChange} color={this.state.color}/>
        <Getnote getNotes={this.state.getNotesProps} color={this.state.color}/>
      </div>
    );
  }
}

export default withRouter(Dashboard);
