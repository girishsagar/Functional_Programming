import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import List from '@material-ui/core/List';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import { ListItem, ListItemIcon } from "@material-ui/core";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

class Drawer extends Component{
    constructor(props){
        super(props);
        this.state=({

        })
    }
    render(){
        return(
            <div className="not">
                
                <ListItemIcon><EmojiObjectsOutlinedIcon/></ListItemIcon>
                    <ListItem> Notes </ListItem>
      
            </div>
        )
    }
}



export default withRouter (Drawer)