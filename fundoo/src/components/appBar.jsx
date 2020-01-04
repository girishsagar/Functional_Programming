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
          <AppBar >
            <Toolbar>
              <div className="Menu_Button">
                <div >
                  <IconButton onClick={this.menuOpen} >
                    <MenuIcon />
                  </IconButton>
                </div>
                <div >
                  <img src={require("../assets/keep.png")} className="keep_image"/>
                </div>
                <div>FUNDOO</div>
              </div>
              <div className="search_main_div">
                <div className="Search_Base">
                  <div className="searchicon">
                    <SearchIcon />
                  </div>
                  <div>
                    <InputBase placeholder="Search…" />
                  </div>
                </div>

                <div className="appicons">
                  <div>
                    <RefreshIcon />
                  </div>
                  <div>
                    <ShoppingCartOutlinedIcon />
                  </div>
                  <div>
                    <ViewComfySharpIcon />
                  </div>
                </div>
              </div>
              <div >
                <div className="name">
                  <Avatar onClick={this.menuItem} aria-owns="simple-menu">
                    G{" "}
                  </Avatar>
                </div>
              </div>
            </Toolbar>
          </AppBar>
          <DrawerNav open={this.state.open} handleArchive={this.props.handleArchive}/>
          <Dropdown
            anchorEl={this.state.anchorEl}
            closeMenu={this.handleClose} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(Navigation);
