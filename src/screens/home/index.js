import React, {Fragment} from "react";
import {Paper, Toolbar, IconButton, AppBar, Typography, Grid, makeStyles} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MyTasks from "../my-tasks";
import PageLayout from "../../components/PageLayout";
import TaskCard from "../../components/TaskCard";

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
            <PageLayout>
                <TaskCard>
                    <Typography variant={'h2'} align={'center'} color={'textPrimary'} gutterBottom>
                        {'My Tasks:'}
                    </Typography>
                </TaskCard>
                <TaskCard>
                    <Typography variant={'subtitle1'}>
                        {'Font!'}
                    </Typography>
                </TaskCard>
            </PageLayout>
        );



    return (
        <Fragment>
            <Header/>
            <MyTasks/>
        </Fragment>

    );
};

export default Home;