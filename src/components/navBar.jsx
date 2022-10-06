import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import IconButton from "@mui/material";

class NavBar extends React.Component {
    render() {
        if (!this.props.user) { // refactor probably not a good solution
            return;                     // we only want navbar if user is loggedin
        }                               // but if they are logged in then we want it everywhere
        return (
            <React.Fragment>
            <AppBar position="fixed">
                <Toolbar>
                    
                </Toolbar>
            </AppBar>
            <Toolbar />
            </React.Fragment>
        );
    }
}

export default NavBar;