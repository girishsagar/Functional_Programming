import React, { Component } from "react";
import { Tooltip, Card, InputBase } from "@material-ui/core";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import { withRouter } from "react-router-dom";
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import {
    MuiThemeProvider,
    createMuiTheme,
  } from "@material-ui/core";
  const thm = createMuiTheme({
    overrides: {
        MuiCard:{
            root:{
                borderRadius:"16px"
            }
    }
}
  });
class Notes extends Component {
  constructor(props) {
    super(props);
    this.setState({});
  }

  render() {
    return (
        <div>
      <div className="create_notes1">
           <MuiThemeProvider theme={thm}>
        <Card className="card">
       
          <div>
            <InputBase multiline placeholder="Take a note..." />
          </div>

          <div className="checkbox">
            <Tooltip title="new label">
              <CheckBoxOutlinedIcon />
            </Tooltip>
          </div>

          <div className="draw">
            <Tooltip title="New note with drawing">
              <CreateOutlinedIcon />
            </Tooltip>
          </div>

          <div className="imageicon">
            <ImageOutlinedIcon />
          </div>
        </Card>
        </MuiThemeProvider>
      </div>
    
<div>
<Card className="card1">
<div>
 <InputBase multiline placeholder="Take a note..." />
</div>
{/* <div className="Bell">
    <AddAlertOutlinedIcon/>
</div>
<div className="add">
    <PersonAddOutlinedIcon/>
</div>
<div className="color">
    <ColorLensOutlinedIcon/>
</div> */}

<div className="icons2">
<div >
    <AddAlertOutlinedIcon/>
</div>
<div>
    <PersonAddOutlinedIcon/>
</div>
<div >
    <ColorLensOutlinedIcon/>
</div>
</div>




</Card>

</di
</div>
    );
  }
}

export default withRouter(Notes);
