import React, {Fragment} from "react";
import {CssBaseline, Paper, Toolbar} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        minWidth: theme.spacing(30)
    },
    header: {
        marginBottom: theme.spacing(4)
    }
}));



const Home = () => {
    const classes = useStyles();

    const Header = () =>
        (
            <Fragment>
                <CssBaseline />
                <AppBar position={'sticky'} className={classes.header}>
                    <Toolbar>
                        <IconButton
                            color={'inherit'}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Fragment>
        );

    const Body = () =>
        (
            <Grid container justify={'center'} spacing={2}>
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