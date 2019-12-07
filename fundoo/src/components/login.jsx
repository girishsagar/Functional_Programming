import React, { Component } from "react";
import { Card, TextField, Button, IconButton } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      password: "",
      openSnackBar: false,
      SnackbarMsg: ""
    };
  }

  snackbarClose = e => {
    this.setState({ snackbarOpen: false });
  };
  onRegister = () => {
    this.props.history.push("/register");
  };
  handleEmail = event => {
    let Email = event.target.value;
    this.setState({
      Email: Email
    });
  };
  handlepassword = event => {
    let password = event.target.value;
    this.setState({
      password: password
    });
  };

  handleSubmit = () => {
    if (this.state.Email === "") {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: " Email cannot be empty"
      });
    } else if (
      !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.Email)
    ) {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "Give valid Email-id..!"
      });
    } else if (this.state.password === "") {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: " passoword cannot be empty "
      });
    } else if (this.state.password.length < 6) {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "password must be of atleast 6 characters long..!"
      });
    }
  };
  render() {
    return (
      <div className="loginpage">
        <Card className="login-card">
          <div className="loge">Login</div>

          <div className="input-field">
            <TextField
              required
              id="Email"
              name="Email"
              label="Email"
              variant="standard"
              fullWidth
              onChange={e => this.handleEmail(e)}
            />
            <div>
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                variant="standard"
                fullWidth
                onChange={this.handlepassword}
              />
            </div>
            <div className="loginbutton">
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={this.handleSubmit}
              >
                Login
              </Button>
            </div>
            <div className="regbutton">
              <Button
                variant="contained"
                fullWidth
                color="secondary"
                onClick={this.onRegister}
              >
                Register?
              </Button>
            </div>
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

export default withRouter(Login);
