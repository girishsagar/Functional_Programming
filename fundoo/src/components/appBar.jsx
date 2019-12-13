import React, { Component } from "react";
import { IconButton, AppBar, Toolbar } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { withRouter } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
import ViewComfySharpIcon from "@material-ui/icons/ViewComfySharp";
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
        width: "500px"
      }
    }
  }
});

class navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="nav">
        <MuiThemeProvider theme={thm}>
          <AppBar position="fixed">
            <Toolbar>
              <div className="Menu_Button">
                <div>
                  <IconButton>
                    <MenuIcon />
                  </IconButton>
                </div>
                <div>FundooImage</div>
                <div>Keep</div>
              </div>
              <div className="parent_search">
                <div className="searchingbar">
                  <div className="Search_Base">
                    <div>
                      <SearchIcon />
                    </div>
                    <div>
                      <InputBase placeholder="Search…" />
                    </div>
                  </div>
                </div>

                <div className="icons">
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

              <div className="profile_Icon">
                <div>
                  <AccountCircleSharpIcon />
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(navigation);
