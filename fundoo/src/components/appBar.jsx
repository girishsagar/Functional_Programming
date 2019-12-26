import React, { Component } from "react";
import { IconButton, AppBar, Toolbar } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { withRouter } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import ViewComfySharpIcon from "@material-ui/icons/ViewComfySharp";
import DrawerNav from "./drawerNavigation";
import Dropdown from "./dropDown";
import Avatar from "@material-ui/core/Avatar";
import Notes from "./note";
const thm = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "white",
        color: "black"
      }
    },
    MuiTypography: {
      body1: {
        marginTop: "-40px",
        marginLeft: "60px"
      }
    },
    MuiInputBase: {
      input: {
        width: "250px",
        padding: "15px"
      }
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        top: "65px"
      }
    },
    MuiAvatar: {
      colorDefault: {
        color: "mediumspringgreen",
        backgroundColor: "black"
      }
    },
    MuiPaper: {
      rounded: {
        marginTop: "50px",
        marginLeft: "-20px"
      }
    }
  }
});

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: null,
      noteArray: []
    };
  }
  menuOpen = () => {
    this.setState({ open: !this.state.open });
  };
  menuItem = e => {
    this.setState({ anchorEl: e.currentTarget });
  };
  handleClose = event => {
    this.setState({ anchorEl: null });
  };
  render() {
    return (
      <div className="nav">
        <MuiThemeProvider theme={thm}>
          <AppBar position="fixed">
            <Toolbar>
              <div className="Menu_Button">
                <div>
                  <IconButton onClick={this.menuOpen}>
                    <MenuIcon />
                  </IconButton>
                </div>
              </div>
              <div className="logo">
                <div>FundooImage</div>
                <div>Keep</div>
              </div>
              {/* <div className="parent_search">
                <div className="searchingbar"> */}
              <div className="Search_Base">
                <div className="searchicon">
                  <SearchIcon />
                </div>
                <div>
                  <InputBase placeholder="Search…" />
                </div>
              </div>
              {/* </div>
                </div> */}

              <div className="appicons">
                <div>
                  <RefreshIcon />
                </div>
                <div className="cart">
                  <ShoppingCartOutlinedIcon />
                </div>
                <div className="view">
                  <ViewComfySharpIcon />
                </div>
              </div>

              <div className="profile-Icon">
                <div className="name">
                  {/* <AccountCircleSharpIcon /> */}

                  <Avatar onClick={this.menuItem} aria-owns="simple-menu">
                    G{" "}
                  </Avatar>
                </div>
              </div>
            </Toolbar>
          </AppBar>
          <DrawerNav open={this.state.open} />
          <Dropdown
            anchorEl={this.state.anchorEl}
            closeMenu={this.handleClose}
          />
          <div>
            <Notes />
          </div>
          {/* {arr} */}
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(Navigation);
