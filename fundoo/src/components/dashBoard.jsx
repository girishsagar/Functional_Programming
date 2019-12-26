import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Navigation from "./appBar";
import { getNote } from "../controller/userController";
import Getnote from "./getNote";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: []
    };
  }
  componentDidMount() {
    getNote()
      .then(result => {
        this.setState({
          noteArray: result
        });
      })

      .catch(error => {
        console.log(error);
        return error.message;
      });
  }

  render() {
    let key;
    var data;
    let arr = this.state.noteArray.map(notes => {
      return (
        <Getnote
          title={notes.data().title}
          description={notes.data().description}
        />
      );
    });

    return (
      <div>
        <Navigation />
        <div className="get">{arr}</div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
