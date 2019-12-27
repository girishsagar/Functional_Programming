import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Navigation from "./appBar";
import Getnote from "./getNote";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: []
    };
  }
  render() {
    return (
      <div>
        <Navigation />
        <Getnote />
      </div>
    );
  }
}

export default withRouter(Dashboard);
