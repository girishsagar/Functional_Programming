import React, { Component } from "react";
import { Card, TextField, IconButton, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
const thm = createMuiTheme({
  overrides: {
    MuiInputLabel: {
      formControl: {
        marginLeft: "10px"
      }
    }
  }
});

class registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      Email: "",
      password: "",
      confirmPassword: "",
      snackbarOpen: false,
      snackbarMsg: ""
    };
  }
  snackbarClose = e => {
    this.setState({
      snackbarOpen: false
    });
  };

  handlefirstName = event => {
    let firstName = event.target.value;
    this.setState({
      firstName: firstName
    });
  };

  handlelastName = event => {
    let lastName = event.target.value;
    this.setState({
      lastName: lastName
    });
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
  handleconfirmPassword = event => {
    let confirmpassword = event.target.value;
    this.setState({
      confirmpassword: confirmpassword
    });
  };

  submit = () => {
    if (this.state.firstName === "") {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: " FirstName cannot be empty..!"
      });
    } else if (!/^[a-zA-Z]+$/.test(this.state.firstName)) {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "firstName must be alphabets"
      });
    } else if (this.state.lastName === "") {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: " LastName cannot be empty"
      });
    } else if (!/^[a-zA-Z]+$/.test(this.state.lastName)) {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "LastName must be alphabets"
      });
    } else if (this.state.Email === "") {
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
    } else if (this.state.confirmPassword === "") {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "Confirm passoword cannot be empty "
      });
    } else if (this.password === this.confirmpassword) {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "password is not match "
      });
    }
  };

  render() {
    return (
      <div className="SignUp">
        <MuiThemeProvider theme={thm}>
          <Card className="sign-card">
            <div Component="h1" variant="h5">
              SignUp
            </div>
            <TextField
              required
              autoComplete="firstName"
              id="FirstName"
              name="FirstName"
              label="FirstName"
              variant="standard"
              type="text"
              fullWidth
              autoFocus
              onChange={e => this.handlefirstName(e)}
            />
            <TextField
              required
              id="lastName"
              name="  lastName"
              label=" LastName"
              variant="standard"
              type="text"
              maxwidth
              fullWidth
              onChange={e => this.handlelastName(e)}
            />

            <TextField
              required
              id="Email"
              name="Email"
              label="Email"
              variant="standard"
              type="text"
              fullWidth
              onChange={e => this.handleEmail(e)}
            />

            <TextField
              required
              id="password"
              name="password"
              label="Password"
              variant="standard"
              type="Password"
              fullWidth
              onChange={e => this.handlepassword(e)}
            />

            <TextField
              required
              id="confirmPassword"
              name="confirmPassword"
              label="ConfirmPassword"
              variant="standard"
              type="Password"
              fullWidth
              onChange={e => this.handleconfirmPassword(e)}
            />

            <Button
              className="signupbutton"
              variant="contained"
              color="secondary"
              onClick={this.submit}
            >
              SignUp
            </Button>

            <Button
              className="loged"
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              Login
            </Button>
          </Card>
        </MuiThemeProvider>

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

export default withRouter(registration);
