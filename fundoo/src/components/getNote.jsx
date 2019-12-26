import React, { Component } from "react";
import {
  Tooltip,
  Card,
  InputBase,
  Button,
  IconButton,
  Menu
} from "@material-ui/core";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import CloseIcon from "@material-ui/icons/Close";
import { withRouter } from "react-router-dom";
import { Snackbar } from "@material-ui/core";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import RadioButtonUncheckedRoundedIcon from "@material-ui/icons/RadioButtonUncheckedRounded";
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
import getNote from "../controller/userController";
const thm = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        borderRadius: "16px"
      }
    }
  }
});
class Getnote extends Component {
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
  //   openCard = () => {
  //     this.setState({ cardOpen: true });
  //   };
  //   changeTitle = e => {
  //     this.setState({ title: e.currentTarget.value });
  //   };
  //   changeDescription = e => {
  //     this.setState({ description: e.currentTarget.value });
  //   };
  //   newNote = () => {
  //       if (this.state.title === "" && this.state.description === "") {
  //         this.setState({ cardOpen: false });
  //       } else {
  //         const noteData = {
  //           title: this.state.title,
  //           description: this.state.description
  //         }
  //     }
  // }
  render() {
    return (
      <div>
        <Card className="card1">
          <div>{this.props.title}</div>
          <div>{this.props.description}</div>

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
            <div
              aria-controls="color-menu"
              aria-haspopup="true"
              onClick={this.colorOpen}
            >
              <Tooltip title="select Colors">
                <ColorLensOutlinedIcon />
              </Tooltip>
            </div>
            <Menu
              id="color-menu"
              anchorEl={this.state.anchorEl}
              keepMounted
              open={Boolean(this.state.anchorEl)}
              onClick={this.colorClose}
            >
              <div>
                <IconButton>
                  <RadioButtonUncheckedRoundedIcon
                    style={{ backgroundColor: "#f28b82" }}
                    onClick={this.changeColor}
                  />
                </IconButton>
                <IconButton>
                  <RadioButtonUncheckedRoundedIcon
                    style={{ backgroundColor: "#cbf0f8" }}
                    onClick={this.changeColor}
                  />
                </IconButton>
              </div>
              <div>
                <IconButton>
                  <RadioButtonUncheckedRoundedIcon
                    style={{ backgroundColor: "#a7ffeb" }}
                    onClick={this.changeColor}
                  />
                </IconButton>
                <IconButton>
                  <RadioButtonUncheckedRoundedIcon
                    style={{ backgroundColor: "#fdcfe8" }}
                    onClick={this.changeColor}
                  />
                </IconButton>
              </div>
            </Menu>
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
            <div></div>
          </div>
        </Card>
      </div>
    );
  }
}

export default withRouter(Getnote);
