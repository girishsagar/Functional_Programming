import React, { Component } from "react";
import { Tooltip, Card, InputBase, Button, IconButton } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import { getNote, } from "../controller/userController";
class Archive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes:[],
        }
    }
    handleGetNotes = () => {
        getNote()
            .then(res => {
                this.setState({
                    notes: res
                });
                console.log("res in notesData", this.state.notes);
            })
            .catch(err => {
                console.log("err", err);
            });
    };

    render() {
        return (
            <div className="_notes">
                <div className="_notes_">
                    {this.state.notes.map(key => {
                        // console.log("data", key.data().isPinned)
                        console.log("the archive is ", key.data().archive)
                        if (key.data().archieve === true) {
                            return (
                                <div className="notes_" >
                                    <Card
                                        className="get_Nottes_card"
                                        style={{
                                            width: "220px",
                                            minHeight: "100px",
                                            height: "auto",
                                            margin: "5px",
                                            padding: "10px",
                                            boxShadow: "0px 1px 7px 0px",
                                            marginTop: "10%",
                                            borderRadius: "1em"
                                        }}
                                    >
                                        <div style={{ display: "flex", justifyContent: "space-between", padding: "5px" }} >
                                            <div>
                                                <div>

                                                    {key.data().title}

                                                    {/* <RoomOutlinedIcon onClick={() => this.handlePin(key.id)} /> */}

                                                </div>
                                                <div >
                                                    {key.data().description}
                                                </div>
                                            </div>
                                        </div>
                                        <div onClick={this.handleOpenDialogue}  >
                                            <div className="base">
                                                <InputBase
                                                    multiline
                                                    onClick={() =>
                                                        this.handleEditNote(
                                                            key.id,
                                                            key.data().title,
                                                            key.data().description,
                                                            key.data().color
                                                        )
                                                    }
                                                />

                                                <div onClick={this.handleOpenDialogue} >
                                                    <InputBase
                                                        value={key.description}
                                                        multiline
                                                        onClick={() =>
                                                            this.handleEditNote(
                                                                key.id,
                                                                key.data().title,
                                                                key.data().description,
                                                                key.data().color
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
                                                <Tooltip title="change Colors">
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
                                                    {/* {archieveIconShow} */}
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
                    })}
                </div>
            </div>
        );
    }
}
export default withRouter(Archive);