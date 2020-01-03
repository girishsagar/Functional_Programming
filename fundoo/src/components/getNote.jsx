import React, { Component } from "react";
import { Tooltip, Card, InputBase, Button, IconButton } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import { editNote, getNote, pinNotes, archiveTheNote } from "../controller/userController";
import Dialog from "@material-ui/core/Dialog";
import ArchiveIcon from '@material-ui/icons/Archive';
import UnarchiveIcon from '@material-ui/icons/Unarchive';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

const thm = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        borderRadius: "16px",
        marginTop: "35px",
        width: "20em"
      }
    },
    MuiCard: {
      root: {
        176: {
          marginLeft: "-30em"
        }
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
      description: "",
      color: "",
      isPinned: false,
      pin_open: false,
      showIcon: false,
    };
  }
  snackbarClose = e => {
    this.setState({ snackbarOpen: false });
  };
  showIcons = () => {
    this.setState({ showIcon: true })
  }
  componentDidMount() {
    this.handleGetNotes();
  }

  handleGetNotes = () => {
    getNote()
      .then(res => {
        this.setState({
          notes: res
        });
        console.log("res in notesData", this.state.notes);
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
  handleEditNote = (noteId, title, description, color) => {
    this.setState({
      noteId: noteId,
      open: false,
      title: title,
      description: description,
      color: color
    });
    let data = {
      noteId: this.state.noteId,
      title: this.state.title,
      description: this.state.description,
      color: this.state.color
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

  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
    if (nextProps.getNotes) {
      this.handleGetNotes()
    
    }
  } 
 
  componentWillReceiveProps(nextProps){
    console.log("the archived pin is ",nextProps)
    if (nextProps.archiveNote) {
      this.archiveTheNote()
  }
}
archiveNote = (noteId) => {
  let data;
     data = {
      //  id: this.props.data.id,  
      noteId: noteId,
      archieve: false,
      // isPinned: false
    }
    console.log("bkswbh",data);
        
  archiveTheNote(data).then(res => {
    this.handleGetNotes()
  })
}
  handlePin = (noteId) => {
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
  render() {
    let svg = this.props.isPinned ? (
      <div className="unpin" onClick={this.handlePin}>
        <img src={require('../assets/unpin.png')} style={{ width: "25px", marginLeft: "11em", marginTop: "-1em" }}  />
      </div>
    ) : (
        <div className="pin"  onClick={this.handleClosePin} >
          <img src={require('../assets/pin.png')} style={{ width: "25px", marginLeft: '11em', }}/>
        </div>
      )

    // let archieveIcon = !this.props.archieve ?
    //   <IconButton onClick={()=>this.archiveNote()}>
    //     <Tooltip title="Archieve">
    //       <ArchiveIcon />
    //     </Tooltip>
    //   </IconButton>
    //   :
    //   <IconButton onClick={this.archiveNote}>
    //     <Tooltip title="UnArchieve">
    //       <UnarchiveIcon />
    //     </Tooltip>
    //   </IconButton>
    // let archieveIconShow = this.state.showIcon ? <IconButton ></IconButton> : archieveIcon
    // let iconDispaly = !this.state.showIcon ? "getNote-icons-hide" : "getNote-icons"

    return (
      <div className="_notes">
        {!this.state.open ? (
          <div className="_notes_">
            {this.state.notes.map(key => {
              console.log("data", key.data().isPinned)
              console.log("the archive is ", key.data().archieve)
              return (
                <div className="notes_" >
                  <Card
                    className="get_Nottes_card"
                    style={{
                      width: "220px",
                      minHeight: "100px",
                      height: "auto",
                      margin: "5px",
                      padding: "10px",
                      boxShadow: "0px 1px 7px 0px",
                      marginTop: "10%",
                      borderRadius:"1em"
                    }}
                  >

                    <div style={{ display: "flex", justifyContent: "space-between", padding: "5px" }} >
                      <div>
                        <div>
                        {svg}
                          {key.data().title}
                          
                          {/* <RoomOutlinedIcon onClick={() => this.handlePin(key.id)} /> */}
                          
                        </div>
                        <div >
                          {key.data().description}
                        </div>
                      </div>
                    </div>
                    <div onClick={this.handleOpenDialogue}  >
                      <div className="base">
                        <InputBase
                          multiline
                          onClick={() =>
                            this.handleEditNote(
                              key.id,
                              key.data().title,
                              key.data().description,
                              key.data().color
                            )
                          }
                        />

                        <div onClick={this.handleOpenDialogue} >
                          <InputBase
                            value={key.description}
                            multiline
                            onClick={() =>
                              this.handleEditNote(
                                key.id,
                                key.data().title,
                                key.data().description,
                                key.data().color
                              )
                            }
                          />
                        </div>
                      </div>
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
                        <Tooltip title="change Colors">
                          <ColorLensOutlinedIcon />
                        </Tooltip>
                      </div>
                      <div>
                        <Tooltip title="Add image">
                          <ImageOutlinedIcon />
                        </Tooltip>
                      </div>
                      <div onClick={()=>this.archiveNote(key.id)}>
                        <Tooltip title="Archive">
                        <ArchiveIcon />
                        {/* {archieveIcon} */}
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
              <Dialog
                // className="dialog"
                open={this.state.open}
                onClose={this.handleOpenDialogue}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                {/* <MuiThemeProvider theme={thm}> */}
                <Card className="dialogCard">
                  <div className="editcard">
                    <div>
                      <InputBase
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.handleTitle}
                      />
                    </div>
                    <div className="inputNote">
                      <InputBase
                        placeholder="Take a note..."
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
                        {/* {archieveIconShow} */}
                      </div>
                      <div>
                        <MoreVertOutlinedIcon />
                      </div>
                      <Button
                        className="button"
                        color="Primary"
                        onClick={this.handleEditNote}
                        style={{ cursor: "pointer" }}
                      >
                        Close
                    </Button>
                    </div>
                  </div>
                </Card>
                {/* </MuiThemeProvider> */}

              </Dialog>
            </div>
          )}
    
      </div>
    );
  }
}

export default withRouter(Getnote);




/************************************************************
// handlePin(noteId) {
  //   this.setState({
  //     isPinned: !this.state.isPinned
  //   })
  //   let data = {
  //     noteId: noteId,
  //     isPinned: this.state.isPinned
  //   }
  //   console.log("data in pin notres", data)
  //   pinNotes(data).then(res => {
  //     console.log("result of  pinnote", res);
  //     this.handleGetNotes();
  //   })
  //     .catch(err => {
  //       console.log("err in pinnote component ", err);
  //     });
  // }
  /******************************************************** */