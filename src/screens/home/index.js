import React, {Fragment, useState} from "react";
import {
    Toolbar,
    IconButton,
    AppBar,
    Typography,
    Grid,
    makeStyles,
    ListItemIcon,
    Drawer,
    ListItemText
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {BrowserRouter, Route} from "react-router-dom";
import MyTasks from "../my-tasks";
import About from "../about";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import InfoIcon from '@material-ui/icons/Info';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({

    header: {
        marginBottom: theme.spacing(4)
    },
    toolbar: {
        justifyContent: 'space-between'
    }
}));

const Home = () => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawerOpen = () => setDrawerOpen(!drawerOpen);

    const MenuDrawer = () =>
        (
            <div
                role={'presentation'}
                onClick={toggleDrawerOpen}
                >
                <List>
                    <ListItem component={Link} to={'/about'}>
                        <ListItemIcon>
                            <InfoIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'About'}/>
                    </ListItem>
                </List>
            </div>
        );

    const Header = () =>
        (
            <Fragment>
                <Drawer open={drawerOpen} onClose={toggleDrawerOpen}>
                    <MenuDrawer/>
                </Drawer>
                <AppBar position={'static'} className={classes.header}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            color={'inherit'}
                            edge={'start'}
                            onClick={toggleDrawerOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant={'h4'} >
                            {'Modern Task Manager'}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Fragment>
        );

    return (
        <BrowserRouter>
            <Header/>
            <Route exact path={'/'} component={MyTasks}/>
            <Route path={'/about'} component={About}/>
        </BrowserRouter>

    );
};

export default Home;