import React, {Fragment} from "react";
import {CssBaseline, Toolbar} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const Home = () =>
    (
        <Fragment>
            <CssBaseline />
            <AppBar position={'absolute'}>
                <Toolbar>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
;

export default Home;