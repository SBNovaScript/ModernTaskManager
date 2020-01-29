import React, {Fragment} from "react";
import {CssBaseline, Paper, Toolbar, IconButton, AppBar, Typography, Grid} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        minWidth: theme.spacing(30)
    },
    header: {
        marginBottom: theme.spacing(4)
    },
    toolbar: {
        justifyContent: 'space-between'
    }
}));

const Home = () => {
    const classes = useStyles();

    const Header = () =>
        (
            <Fragment>
                <AppBar position={'static'} className={classes.header}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            color={'inherit'}
                            edge={'start'}
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

    const Body = () =>
        (
            <Grid container justify={'center'}>
                <Paper className={classes.heroContent}>
                    <Typography variant={'h2'} align={'center'} color={'textPrimary'} gutterBottom>
                        {'Test'}
                    </Typography>
                </Paper>
            </Grid>
        );

    return (
        <Fragment>
            <Header/>
            <Body/>
        </Fragment>

    );
};

export default Home;