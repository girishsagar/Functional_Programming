import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Navigation from "./appBar";
import Getnote from "./getNote";
import Notes from "./note";
import Archive from './archive'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      color: "",
      archive:false,
      getNotesProps:false,
    };
  }
 
  handleArchive=()=>{
    this.setState({archive:true})

  }
  handleNote=()=>{
    this.setState()
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
      !this.state.archive?
      <div>
        <Navigation handleArchive={this.handleArchive} />
        <Notes initiateGetNotes={this.initiateGetNotes} colorChange={this.colorChange} color={this.state.color}/>
        <Getnote getNotes={this.state.getNotesProps} color={this.state.color}/>
      </div>
      :
      <div>
        <Navigation handleArchive={this.handleArchive}/>
        <Archive/>
      </div>
    );
  }
}

export default withRouter(Dashboard);
