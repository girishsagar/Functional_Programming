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
      getNotesProps:false,
    };
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
        <Notes initiateGetNotes={this.initiateGetNotes}/>
        <Getnote getNotes={this.state.getNotesProps}/>
      </div>
    );
  }
}

export default withRouter(Dashboard);
