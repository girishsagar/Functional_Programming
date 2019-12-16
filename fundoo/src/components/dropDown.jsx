import React, { Component } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Drawer
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme ,Menu,MenuItem} from "@material-ui/core";
const thm = createMuiTheme({
  overrides: {
    MuiDivider: {
      root: {
        width: "150px"
      }
    },
    MuiList: {
      padding: {
        right: "-1222px",
        top: "150px"
      }
    }
  }
});

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <Menu
        id="simple-menu"
        anchorEl={this.props.anchorEl}
        open={Boolean(this.props.anchorEl)}
        onClose={this.props.closeMenu}
      >
        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleClose}>My account</MenuItem>
        <MenuItem onClick={this.handleClose}>Logout</MenuItem>
      </Menu>
    //   <div className="drop">
    //     {/* <Drawer
    //       variant="persistent"
    //       overflow="auto"
    //       open={this.props.open}
    //       width={250}
    //     > */}
    //     <MuiThemeProvider theme={thm}>
    //       <List>
    //         <div className="pro">
    //           <ListItem button key="Profile">
    //             <ListItemText primary="Profile" />
    //           </ListItem>
    //         </div>
    //         <Divider />
    //         <div className="settings">
    //           <ListItem button key="settings">
    //             <ListItemText primary="Settings" />
    //           </ListItem>
    //         </div>
    //         <Divider />
    //         <div className="signout">
    //           <ListItem button key="signOut">
    //             <ListItemText primary="Sign Out" />
    //           </ListItem>
    //         </div>
    //         <Divider />
    //       </List>
    //     </MuiThemeProvider>
    //     {/* </Drawer> */}
    //   </div>
    );
  }
}

export default withRouter(Dropdown);
