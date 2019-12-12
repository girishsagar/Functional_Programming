import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
// const thm = createMuiTheme({
//   overrides: {
//     MuiAppBar: {
//       colorPrimary: {
//         backgroundColor: "white"
//       }
//     },
//     MuiSvgIcon: {
//       root: {
//         color: "black"
//       }
//     }
//   }
// });

class menubar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: ""
    };
  }

  render() {
    return (
      <AppBar>
        <Typography className="logoname">Fundoo</Typography>
        {/* <MuiThemeProvider theme={thm}> */}
        <div className="mlogo">
          <IconButton>
            <MenuIcon />
          </IconButton>
        </div>
        {/* </MuiThemeProvider> */}
      </AppBar>

      // <AppBar position="static">
      //
      //   <div className="nav">
      //     <Toolbar>
      //       <div className="mlogo">
      //         <IconButton>
      //           <MenuIcon />
      //         </IconButton>
      //       </div>
      //
      //       <div className="search">
      //         <SearchIcon />
      //         <InputBase placeholder="Search…" />
      //       </div>
      //     </Toolbar>
      //   </div>
      //   </MuiThemeProvider>
      // </AppBar>
    );
  }
}

export default withRouter(menubar);
