import React, {Fragment} from "react";
import PageLayout from "../../components/PageLayout";
import TaskCard from "../../components/TaskCard";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const MyTasks = () => {

        const Task = () =>
            (
                <Card>
                        <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                        Task #1
                                </Typography>
                                <Typography variant="body2" component="p">
                                        Task Description
                                </Typography>
                        </CardContent>
                        <CardActions>
                                <Button size="small" variant="contained">Done!</Button>
                        </CardActions>
                </Card>
            );

        return (
            <PageLayout>
                    <Task/>
                    <Task/>
                    <Task/>
            </PageLayout>


        );
}

export default MyTasks;