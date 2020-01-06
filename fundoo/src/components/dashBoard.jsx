import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Navigation from "./appBar";
import Getnote from "./getNote";
import Notes from "./note";
import Archive from './archive'
import note from "./note";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      color: "",
      note:true,
      archive:false,
      getNotesProps:false,
    };
  }
 
  handleArchive=()=>{
    this.setState({archive:true,note:false})

  }
  handleNote=()=>{
    this.setState({note:true,archive:false})
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
        <Navigation handleArchive={this.handleArchive} handleNote={this.handleNote}/>
        <Notes initiateGetNotes={this.initiateGetNotes} colorChange={this.colorChange} color={this.state.color}/>
        <Getnote getNotes={this.state.getNotesProps} color={this.state.color}/>
      </div>
      :
      <div>
        <Navigation handleArchive={this.handleArchive} handleNote={this.handleNote}/>
        <Archive/>
      </div>
    );
  }
}

export default withRouter(Dashboard);
