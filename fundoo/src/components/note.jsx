import React, { Component } from "react";
import {
  Tooltip,
  Card,
  InputBase,
  Button,
  IconButton
} from "@material-ui/core";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import CloseIcon from "@material-ui/icons/Close";
import { withRouter } from "react-router-dom";
import { Snackbar } from "@material-ui/core";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";

import Slide from '@material-ui/core/Slide';
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import UndoTwoToneIcon from "@material-ui/icons/UndoTwoTone";
import RedoTwoToneIcon from "@material-ui/icons/RedoTwoTone";
import { saveNote, getNote, pinNotes } from "../controller/userController";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardOpen: false,
      anchorEl: null,
      cardColor: "",
      title: "",
      description: "",
      isPinned: false,
      // pin_open:false,
      snackbarOpen: false,
      snackbarMsg: ""
    };
  }
  componentDidMount() {
    this.handleGetNotes();
  }
  handleGetNotes = () => {
    getNote()
      .then(res => {
        this.setState({
          // / notes: res.noteData.noteData.noteData
          notes: res
        });
        console.log("res in notesData", this.state.notes);
      })
      .catch(err => {
        console.log("err", err);
      });
  };
  snackbarClose = e => {
    this.setState({ snackbarOpen: false });
  };

 TransitionLeft=(props)=> {
  return <Slide {...props} direction="left" />;
}
  openCard = () => {
    this.setState({ cardOpen: true });
  };
  changeTitle = e => {
    this.setState({ title: e.currentTarget.value });
  };
  changeDescription = e => {
    this.setState({ description: e.currentTarget.value });
  };
  handleOpenPin = (noteId) => {
    this.setState({ isPinned: true })
    let data = {
      noteId: noteId,
      isPinned: this.state.isPinned
    }
    console.log("data in pin notres", data)
    pinNotes(data).then(res => {
      console.log("result of  pinnote", res);
      this.handleGetNotes();
    })
      .catch(err => {
        console.log("err in pinnote component ", err);
      });
  }

  handleClosePin = () => {
    this.setState({ isPinned: false })
  }
  newNote = () => {
    this.props.initiateGetNotes(true)
    try {
      if (this.state.title === "" && this.state.description === "") {
        this.setState({ cardOpen: false });
      } else {
        const noteData = {
          isPinned: true,
          title: this.state.title,
          description: this.state.description
        };
        saveNote(noteData).then(res => {
          if (res === true) {
            this.setState({
              snackbarMsg: " New Note Saved",
              snackbarOpen: true,
              title: "",
              description: "",
              cardOpen: false,

            });
          } else {
            this.setState({
              snackbarMsg: res,
              snackbarOpen: true
            });
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  handleOpen = () => {
    this.setState({
      cardOpen: true
    })
  }
  render() {
    return !this.state.cardOpen ? (

      <div style={{ display: "flex", justifyContent: "center", width: "82em", marginTop: "100px" }}
        onClick={this.handleOpen}>
        <Card className="create" style={{ width: "32em", padding: "18px", height: "25px", }} >

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <InputBase
                placeholder="Take a note..." />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", width: "10em" }}>
              <div><CheckBoxOutlinedIcon /></div>
              <div><ImageOutlinedIcon /></div>
              <div><CreateOutlinedIcon /></div>
            </div>
          </div>
        </Card>

        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
            color: "white"
          }}
          open={this.state.snackbarOpen}
          autoHideDuration={2000}
          onClose={this.snackbarClose}
          message={<span id="message-id">{this.state.snackbarMsg}</span>}
          action={[
            <IconButton onClick={this.handleClose}>
              <CloseIcon onClick={this.snackbarClose} />
            </IconButton>
          ]}
        />
      </div>
    ) : (
        <div style={{ marginTop: "125px", width: "82em", display: "flex", justifyContent: "center" }}>
        
          <Card className="card1" >
            {!this.state.isPinned ? (
              <div style={{ width: "30em", display: "flex", justifyContent: "flex-end" }}>
                <img src={require('../assets/unpin.png')} style={{ width: "25px" }} alt="unpin" onClick={this.handleOpenPin} />
              </div>
            ) : (
                <div style={{ width: "30em", display: "flex", justifyContent: "flex-end" }} alt="pin" onClick={this.handleClosePin}>
                  <img src={require('../assets/pin.png')} style={{ width: "25px" }} />
                </div>
              )}
            <div>
              <InputBase
                multiline
                placeholder="Ttitle"
                onChange={this.changeTitle}
                value={this.state.title}

              />
            </div>
            <div>
              <InputBase
                multiline
                placeholder="Take a note..."
                onChange={this.changeDescription}
                value={this.state.description}
              />
            </div>

            <div className="icons2">
              <div>
                <Tooltip title="Reminder">
                  <AddAlertOutlinedIcon />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Collbrate">
                  <PersonAddOutlinedIcon />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="select Colors">
                  <ColorLensOutlinedIcon />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Add image">
                  <ImageOutlinedIcon />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Archive">
                  <ArchiveOutlinedIcon />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="More">
                  <MoreVertOutlinedIcon />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Undo">
                  <UndoTwoToneIcon />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Redo">
                  <RedoTwoToneIcon />
                </Tooltip>
              </div>
              <div>
                <Button color="primary" onClick={this.newNote}>
                  Close
                </Button>
              </div>
            </div>
          </Card>
        </div>
      );
  }
}

export default withRouter(Notes);
