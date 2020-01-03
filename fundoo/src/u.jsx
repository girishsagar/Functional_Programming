/*****************************
 * @purpose :getnote component of fundoonote application
 * @file    :getNote.jsx
 * @author  :Riyazuddin K
 * @date    :11-12-2019
 ****************************/
import React, { Component } from 'react'
import { Card, IconButton, MenuItem, Menu, Tooltip,Chip } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ArchiveIcon from '@material-ui/icons/Archive';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditNote from './editNote'
import { addNoteToTrash, archiveTheNote, pinnedTheNote, updateNoteReminder,restoreNote,deleteNote } from '../../controller/controller'
import SvgPin from '../../icons/Pin'
import SvgPinned from '../../icons/Pinned'
import UnarchiveIcon from '@material-ui/icons/Unarchive';
import Reminder from './reminder';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
class GetNote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editNoteOpen: false,
      anchorEl: null,
      reminderAnchorEl: null,
      showIcon: false,
      reminder: null, 
    }
  }
  reminderMenuOpen = (e) => {
    this.setState({ reminderAnchorEl: e.currentTarget });
  }
  reminderMenuClose = () => {
    this.setState({ reminderAnchorEl: null });
  }
  handleTodayDate = async () => {
    this.reminderMenuClose()
    let date = new Date().toDateString();
    let reminder = date + ", 8:00 PM";
    await this.setState({ reminder: reminder })
    this.updateRemainder()
  }
  handleTomorrowDate = async () => {
    this.reminderMenuClose()
    let tomorrow = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1);
    let date = tomorrow.toDateString();
    let reminder1 = date + ", 8:00 PM";
    await this.setState({ reminder: reminder1 })
    this.updateRemainder()
  }
  handleNextWeekDate = async () => {
    this.reminderMenuClose()
    let nextweek = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 7);
    let date = nextweek.toDateString();
    let reminder1 = date + ", 8:00 PM";
    await this.setState({ reminder: reminder1 })
    this.updateRemainder()
  }
  updateRemainder = () => {
    const data = {
      id: this.props.data.id,
      reminder: this.state.reminder
    }
    updateNoteReminder(data).then(res => {
      this.props.showAllNote()
    })
  }
  moreMenuClose = () => {
    this.setState({ anchorEl: null });
  }
  moreMenuOpen = (e) => {
    this.setState({ anchorEl: e.currentTarget });
  }
  editNoteOpen = () => {
    this.setState({ editNoteOpen: !this.state.editNoteOpen })
  }
  removeNote = () => {
    const data = {
      id: this.props.data.id
    }
    addNoteToTrash(data).then(res => {
      console.log(res)
      this.setState({ anchorEl: null });
      this.props.showAllNote()
    })
  }
  archiveNote = () => {
    let data;
    if (this.props.data.data().archieve) {
      data = {
        id: this.props.data.id,
        archieve: false,
        pinned:false
      }
    } else {
      data = {
        id: this.props.data.id,
        archieve: true,
        pinned:false
      }
    }
    archiveTheNote(data).then(res => {
      this.props.showAllNote()
    })
  }
  pinTheNote = () => {
    let data
    if (this.props.data.data().archieve) {
      data = {
        id: this.props.data.id,
        archieve: false,
        pinned: true
      }
    } else {
      data = {
        id: this.props.data.id,
        archieve: false,
        pinned: !this.props.data.data().pinned
      }
    }
    pinnedTheNote(data).then(res => {
      this.props.showAllNote()
    })
  }
  showIcons = () => {
    this.setState({ showIcon: true })
  }
  hideIcons = () => {
    this.setState({ showIcon: false })
  }
  removeReminder = async() => {
    await this.setState({ reminder: null })
    this.updateRemainder()
  }
  deleteForever = () => {
    const data = {
      id: this.props.data.id
    }
    deleteNote(data).then(res => {
      console.log(res)
      this.props.showAllNote()
    })
  }
  restoreFromTrash = () => {
    const data = {
      id: this.props.data.id
    }
    restoreNote(data).then(res => {
      console.log(res)
      this.props.showAllNote()
    })
  }
  render() {
    let svgPin = !this.props.data.data().pinned ? <SvgPin /> : <SvgPinned />
    let svgPinShow = !this.state.showIcon ? <IconButton ></IconButton> : svgPin
    let archieveIcon = !this.props.data.data().archieve ?
      <IconButton onClick={this.archiveNote}>
        <Tooltip title="Archieve">
          <ArchiveIcon />
        </Tooltip>
      </IconButton>
      :
      <IconButton onClick={this.archiveNote}>
        <Tooltip title="UnArchieve">
        <UnarchiveIcon />
        </Tooltip>
      </IconButton>
    let archieveIconShow = !this.state.showIcon ? <IconButton ></IconButton> :archieveIcon
    let iconDispaly = !this.state.showIcon ? "getNote-icons-hide" : "getNote-icons"
    return (
      <div className="note-card" onMouseOver={this.showIcons} onMouseLeave={this.hideIcons}
        style={{ width: this.props.cardWidth }}>
        <Card style={{ backgroundColor: this.props.data.data().color }} >
          <div className="note-card-content">
            <div >
              <div className="note-title-pin">
                <div className="note-title"
                  onClick={this.editNoteOpen}>
                  {this.props.data.data().title}
                </div>
                <div>
                  <IconButton onClick={this.pinTheNote}>
                    {svgPinShow}
                  </IconButton>
                </div>
              </div>
              <div className="note-description" onClick={this.editNoteOpen}>
                {this.props.data.data().description}
              </div>
              {this.props.data.data().reminder !== null ?
                <div className="reminder-date">
                  <Chip
                  icon={<AccessTimeIcon/>}
                  label={this.props.data.data().reminder}
                  onDelete={this.removeReminder}
                    variant="outlined"
                  />
                  </div>
                :
                <div className="reminder-date"></div>}
            </div>
            <div className="icon-content">
              {this.props.data.data().isDeleted ===true ?
                <div className={iconDispaly}>
                  <IconButton onClick={this.deleteForever}>
                    <Tooltip title="Delete Forever">
                      <DeleteForeverIcon/>
                    </Tooltip>
                  </IconButton>
                  <IconButton onClick={this.restoreFromTrash}>
                    <Tooltip title="Restore">
                      <RestoreFromTrashIcon/>
                    </Tooltip>
                  </IconButton>
                </div>
                :
                <div className={iconDispaly}>
                  <Reminder
                    anchorEl={this.state.reminderAnchorEl}
                    handleTodayDate={this.handleTodayDate}
                    handleTomorrowDate={this.handleTomorrowDate}
                    handleNextWeekDate={this.handleNextWeekDate}
                    reminderMenuOpen={this.reminderMenuOpen}
                    reminderMenuClose={this.reminderMenuClose} />
                  <IconButton >
                    <Tooltip title="Add Colaborator">
                      <PersonAddIcon />
                    </Tooltip>
                  </IconButton>
                  <IconButton >
                    <Tooltip title="Add Image">
                      <ImageIcon />
                    </Tooltip>
                  </IconButton>
                  {archieveIconShow}
                  <IconButton
                    aria-controls="more-menu"
                    aria-haspopup="true"
                    onClick={this.moreMenuOpen}>
                    <Tooltip title="More">
                      <MoreVertIcon />
                    </Tooltip>
                  </IconButton>
                  <Menu
                    id="more-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.moreMenuClose}>
                    <MenuItem onClick={this.removeNote}>Remove</MenuItem>
                  </Menu>
                </div>}
            </div>
          </div>
        </Card>
        <EditNote
          open={this.state.editNoteOpen}
          data={this.props.data}
          closeDialog={this.editNoteOpen}
          showAllNote={this.props.showAllNote} />
      </div>
    )
  }
}
export default GetNote