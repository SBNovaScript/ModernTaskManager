import React from "react";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    heroContent: {
        padding: theme.spacing(8, 0, 6),
        maxWidth: theme.spacing(30),
    }
}));

const TaskCard = ({children}) => {
    const classes = useStyles();
    return (
        <Card className={classes.heroContent}>
            {children}
        </Card>
    );
};

export default TaskCard;