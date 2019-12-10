import React, { Component } from "react";
import { Card, TextField, Button, IconButton, Avatar } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { withRouter } from "react-router-dom";
import { Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
class forget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: " ",
      SnackbarOpen: false,
      snackbarMsg: ""
    };
  }
  snackbarClose = e => {
    this.setState({ snackbarOpen: false });
  };
  handleEmail = event => {
    let Email = event.target.value;
    this.setState({
      Email: Email
    });
    if (
      Email == !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.Email)
    ) {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "Give valid Email-id..!"
      });
    }
  };
  render() {
    return (
      <div className="loginpage">
        <Card className="login-card">
          <div className="loge">Forget-Password</div>
          <TextField
            required
            id="Email"
            name="Email"
            label="Email"
            variant="standard"
            autoFocus
            fullWidth
            onChange={event => this.handleEmail(event)}
          />
          <div className="loginbutton">
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Login
            </Button>
          </div>
        </Card>

        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
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
    );
  }
}

export default withRouter(forget);
