import React, {Fragment} from "react";
import {CssBaseline, Toolbar} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () =>
    (
        <Fragment>
            <CssBaseline />
            <AppBar position={'sticky'}>
                <Toolbar>
                    <IconButton
                        color={'inherit'}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
;

export default Header;