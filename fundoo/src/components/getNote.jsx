import React, { Component } from "react";
import { Tooltip, Card, InputBase, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import { editNote, getNote } from "../controller/userController";
import Dialog from "@material-ui/core/Dialog";
const thm = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        borderRadius: "16px",
        marginTop:"35px",
        width:"20em"
      }
    }
  }
});
class Getnote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      open: false,
      noteId: "",
      title: "",
      description: ""
    };
  }
  // snackbarClose = e => {
  //   this.setState({ snackbarOpen: false });
  // };
  componentDidMount() {
    this.handleGetNotes();
  }
  handleGetNotes = () => {
    getNote()
      .then(res => {
        this.setState({
          // notes: res.noteData.noteData.noteData
          notes: res
        });
        // console.log("res in notesData", this.state.notes);
      })
      .catch(err => {
        console.log("err", err);
      });
  };
  handleOpenDialogue = () => {
    this.setState({
      open: !this.state.open
    });
  };
  handleEditNote = (noteId, title, description) => {
    this.setState({
      noteId: noteId,
      open: false,
      title: title,
      description: description
    });
    let data = {
      noteId: this.state.noteId,
      title: this.state.title,
      description: this.state.description
    };
    console.log("result of editData", data);
    editNote(data)
      .then(res => {
        console.log("result of  editNote", res);
        this.handleGetNotes();
      })
      .catch(err => {
        console.log("err in editNote component ", err);
      });
  };
  handleTitle = event => {
    let title = event.target.value;
    this.setState({
      title: title
    });
  };
  handleDescription = event => {
    let description = event.target.value;
    this.setState({
      description: description
    });
  };
  render() {
    return (
      <div>
        {!this.state.open ? (
          <div className="all">
            {this.state.notes.map(key => {
              return (
                <div>
                  <Card className="card1">
                    <div>{key.data().title}</div>
                    <div>{key.data().description}</div>
                    <div onClick={this.handleOpenDialogue}>
                      <InputBase
                        value={key.data().title}
                        // value={key.data().description}
                        multiline
                        onClick={() =>
                          this.handleEditNote(
                            key.id,
                            key.data().title,
                            key.data().description
                          )
                        }
                      />
                    </div>
                    <div onClick={this.handleOpenDialogue}>
                      <InputBase
                        value={key.description}
                        multiline
                        onClick={() =>
                          this.handleEditNote(
                            key.id,
                            key.data().title,
                            key.data().description
                          )
                        }
                      />
                    </div>
                    <div className="getnoteicons">
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
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="cd">
            <Dialog className="dialog"
              open={this.state.open}
              onClose={this.handleOpenDialogue}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
               <MuiThemeProvider theme={thm}>
              <Card className="dialogCard">
              <div className="editcard"> 
                <div>
                    <InputBase
                      //placeholder="Title"
                      value={this.state.title}
                      onChange={this.handleTitle}
                    />
                
                </div>
                <div className="inputNote">
                  <InputBase
                    // placeholder="Take a note..."
                    value={this.state.description}
                    onChange={this.handleDescription}
                  />
                </div>
                </div>
                <div className="imageAndClose">
                  <div className="dialogIcon">
                    <div>
                      <AddAlertOutlinedIcon />
                    </div>
                    <div>
                      <PersonAddOutlinedIcon />
                    </div>
                    <div>
                      <ColorLensOutlinedIcon />
                    </div>
                    <div>
                      <ImageOutlinedIcon />
                    </div>
                    <div>
                      <ArchiveOutlinedIcon />
                    </div>
                    <div>
                      <MoreVertOutlinedIcon />
                    </div>
                    <Button className="button"
                      color="Primary"
                      onClick={this.handleEditNote}
                      style={{ cursor: "pointer" }}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </Card>
              </MuiThemeProvider>

            </Dialog>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Getnote);
