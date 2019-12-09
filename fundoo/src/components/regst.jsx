import React, { Component } from "react";
import { Card, TextField, IconButton, Button, Avatar } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { registeration } from "../controller/userController";
const thm = createMuiTheme({
  overrides: {
    MuiInputLabel: {
      formControl: {
        marginLeft: "3px",
        fontSize: "20px",
        fontFamily: "Cursive",
        font: "bold"
      }
    },
    MuiInputBase: {
      input: {
        fontFamily: "Cursive",
        fontSize: "20px",
        marginLeft: "1px",
        borderSpacing: "10px"
      }
    },
    MuiAvatar: {
      root: {
        left: "10px",
        width: "60px",
        height: "60px"
      },
      colorDefault: {
        backgroundColor: "red",
        marginLeft: "17px",
        marginTop: "-4px"
      }
    },
    MuiSvgIcon: {
      root: {
        color: "white",
        width: "200px",
        height: "41px",
        left: "150px"
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
      // confirmPassword: "",
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
    if (firstName == !/^[a-zA-Z]+$/.test(this.state.firstName)) {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "firstName must be alphabets"
      });
    } else
      this.setState({
        snackbarOpen: false,
        snackbarMsg: ""
      });
  };
  handlelastName = event => {
    let lastName = event.target.value;
    this.setState({
      lastName: lastName
    });
    if (lastName == !/^[a-zA-Z]+$/.test(this.state.lastName)) {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "LastName must be alphabets"
      });
    }
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

  handlepassword = event => {
    let password = event.target.value;
    this.setState({
      password: password
    });
  };
  onLogin = () => {
    this.props.history.push("/Login");
  };
  submit = () => {
    if (this.state.firstName === "") {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: " FirstName cannot be empty..!"
      });
    } else if (this.state.lastName === "") {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: " LastName cannot be empty"
      });
    } else if (this.state.Email === "") {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: " Email cannot be empty"
      });
    } else if (this.state.password === "") {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: " passoword cannot be empty "
      });
      // passing an data to the firebase 
    } else {
      const user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        Email: this.state.Email,
        password: this.state.password
      };
      registeration(user).then(res => {
        if (res === "success") {
          this.setState({
            snackbarMsg: "Registration Successs" + res,
            snackbarOpen: true
          });
          this.props.history.push(`/login`);
        } else {
          this.setState({
            snackbarMsg: res,
            snackbarOpen: true
          });
        }
      });
    }
  };
  render() {
    return (
      <div className="SignUp">
        <MuiThemeProvider theme={thm}>
          <Card className="sign-card">
            <div className="avatar">
              <Avatar>
                <LockOutlinedIcon />
              </Avatar>
            </div>
            <div className="loge">SignUp</div>
            <TextField
              required
              autoComplete="password"
              id="FirstName"
              name="FirstName"
              label="FirstName"
              variant="standard"
              type="text"
              fullWidth
              autoFocus
              onChange={event => this.handlefirstName(event)}
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
              onChange={event => this.handlelastName(event)}
            />

            <TextField
              required
              id="Email"
              name="Email"
              label="Email"
              variant="standard"
              type="text"
              fullWidth
              onChange={event => this.handleEmail(event)}
            />

            <TextField
              required
              id="lastName"
              name="lastName"
              label="Password"
              variant="standard"
              type="Password"
              fullWidth
              onChange={event => this.handlepassword(event)}
            />

            <div className="regbutton1">
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.submit}
              >
                Sign Up
              </Button>
            </div>
            <div className="regbutton2">
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.onLogin}
              >
                Login
              </Button>
            </div>
          </Card>
        </MuiThemeProvider>

        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          open={this.state.snackbarOpen}
          autoHideDuration={5000}
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
