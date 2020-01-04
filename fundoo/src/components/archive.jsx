import React, { Component } from "react";
import {
    Tooltip,
    Card,
    InputBase,
    Button,
    IconButton
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

// import DrawerComponent from '../component/drawer.jsx';
import DrawerNav from "./drawerNavigation";
import {
    getNote,

    archiveTheNote
} from "../controller/userController";

const thm = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paperAnchorDockedLeft: {
                marginTop: "66px"
            }
        }

    }
})




class Archive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false,
            open: false,
            open: false,
            notes: []
        };
    }
    openDrawer = () => {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        })
    }
    handleOpenDialogue = () => {
        this.setState({
            open: !this.state.open
        })
    }
    componentDidMount() {
        this.handleGetNotes()
    }

    handleGetNotes = () => {
        getNote()
            .then(res => {
                this.setState({
                    notes: res
                });
                console.log("res in notesData archive", this.state.notes);
            })
            .catch(err => {
                console.log("err", err);
            });
    };

    render() {
        let archiveNotes = this.state.notes.map(key => {
            if (key.data().archive === true) {
                return (
                    <div className="notes_">
                        <Card
                            className="get_Nottes_card"
                            style={{
                                width: "220px",
                                minHeight: "100px",
                                height: "auto",
                                margin: "5px",
                                padding: "10px",
                                boxShadow: "0px 1px 7px 0px",
                                marginTop: "10%"
                            }}
                        >
                            {/* {svg} */}
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    padding: "5px"
                                }}
                            >
                                <div>
                                    <div>
                                        {key.data().title}
                                        {/* <RoomOutlinedIcon onClick={() => this.handlePin(key.id)} /> */}
                                    </div>
                                    <div>{key.data().description}</div>
                                </div>
                                <div>
                                    <img
                                        src={require("../assets/unpin.png")}
                                        style={{ width: "20px" }}
                                        onClick={() => this.handlePin(key.id)}
                                    />
                                </div>
                            </div>

                            <div onClick={this.handleOpenDialogue}>
                                <div className="base">
                                    <InputBase
                                        multiline
                                        onClick={() =>
                                            this.handleEditNote(
                                                key.id,
                                                key.data().title,
                                                key.data().description
                                            )
                                        }
                                    />

                                    <div onClick={this.handleOpenDialogue}>
                                        <InputBase
                                            value={key.description}
                                            multiline
                                            onClick={() =>
                                                this.handleEditNote(
                                                    key.id,
                                                    key.data().title,
                                                    key.data().description
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="getnoteicons">
                                <div>
                                    <Tooltip title="Reminder">
                                        <AddAlertOutlinedIcon />
                                    </Tooltip>
                                </div>
                                <div>
                                    <Tooltip title="Collbrate">
                                        <PersonAddOutlinedIcon />
                                    </Tooltip>
                                </div>
                                <div>
                                    <Tooltip title="select Colors">
                                        <ColorLensOutlinedIcon />
                                    </Tooltip>
                                </div>
                                <div>
                                    <Tooltip title="Add image">
                                        <ImageOutlinedIcon />
                                    </Tooltip>
                                </div>
                                <div>
                                    <Tooltip title="Archive">
                                        {/* <ArchiveOutlinedIcon /> */}
                                        <div
                                            style={{ cursor: "pointer" }}
                                            onClick={() => this.archiveNote(key.id)}
                                        >
                                            {/* <ArchiveOutlinedIcon /> */}
                                        </div>
                                    </Tooltip>
                                </div>
                                <div>
                                    <Tooltip title="More">
                                        <MoreVertOutlinedIcon />
                                    </Tooltip>
                                </div>
                            </div>
                        </Card>
                    </div>
                );
            }
        })
        return (
            <div className="_notes">
                <div className="_notes_dash">
                    {archiveNotes}
                    <MuiThemeProvider theme={thm}>

                        <DrawerNav open={this.state.open} />
                    </MuiThemeProvider>
                </div>
            </div>

        );
    }
}

export default withRouter(Archive);