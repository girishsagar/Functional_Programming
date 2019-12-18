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
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import UndoTwoToneIcon from "@material-ui/icons/UndoTwoTone";
import RedoTwoToneIcon from "@material-ui/icons/RedoTwoTone";
import { saveNote } from "../controller/userController";
const thm = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        borderRadius: "16px"
      }
    }
  }
});
class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardOpen: false,
      anchorEl: null,
      cardColor: "",
      title: "",
      description: "",
      snackbarOpen: false,
      snackbarMsg: ""
    };
  }
  snackbarClose = e => {
    this.setState({ snackbarOpen: false });
  };
  openCard = () => {
    this.setState({ cardOpen: true });
  };
  changeTitle = e => {
    this.setState({ title: e.currentTarget.value });
  };
  changeDescription = e => {
    this.setState({ description: e.currentTarget.value });
  };
chageColor=()=>{
  this.state({})
}
  newNote = () => {
    try {
      if (this.state.title === "" && this.state.description === "") {
        this.setState({ cardOpen: false });
      } else {
        const noteData = {
          title: this.state.title,
          description: this.state.description
        };
        saveNote(noteData).then(res => {
          if (res === true) {
            this.setState({
              snackbarMsg: " Saved",
              snackbarOpen: true,
              title: "",
              description: "",
              cardOpen: false
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
  };
  render() {
    return !this.state.cardOpen ? (
      <div className="create_notes1">
        <MuiThemeProvider theme={thm}>
          <Card className="card">
            <div>
              <InputBase
                multiline
                placeholder="Take a note...."
                onClick={this.openCard}
              />
            </div>
            <div className="edited" onClick={this.openCard} >
              <div className="checkbox">
                <Tooltip title="new label">
                  <CheckBoxOutlinedIcon />
                </Tooltip>
              </div>

              <div className="draw">
                <Tooltip title="New note with drawing">
                  <CreateOutlinedIcon />
                </Tooltip>
              </div>

              <div className="imageicon">
                <ImageOutlinedIcon />
              </div>
            </div>
          </Card>
        </MuiThemeProvider>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
            color:"white"
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
      <div>
        <Card className="card1">
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
