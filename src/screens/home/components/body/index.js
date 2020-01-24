import React from "react";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    }
}));

const Body = () => {
    const classes = useStyles();

    return (
    <main>
        <Paper className={classes.heroContent}>
            <Typography variant={'h2'} align={'center'} color={'textPrimary'} gutterBottom>
                Test
            </Typography>
        </Paper>
    </main>
)};

export default Body;