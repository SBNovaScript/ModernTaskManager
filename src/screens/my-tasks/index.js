import React, {Fragment, useState} from "react";
import PageLayout from "../../components/PageLayout";
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const MyTasks = () => {

    const [tasks, setTasks] = useState(null);

        const Task = ({title, description}) =>
            (
                <Card>
                        <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    {title}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {description}
                                </Typography>
                        </CardContent>
                        <CardActions>
                                <Button size="small" variant="contained">Done!</Button>
                        </CardActions>
                </Card>
            );

        const ListOfTasks = () => {
            return (
                <Fragment>
                    {
                        tasks.map((task) =>
                            <Task title={task.title} description={task.description}/>
                        )
                    }
                </Fragment>

            )
        };

        const NoTasksFound = () => (
            <Fragment>
                <Grid container justify={'center'}>
                    <Grid container item xs={12} justify={'center'}>
                        <Typography variant={'h2'}>
                            {'No Tasks!'}
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} justify={'center'}>
                        <Button component={Link} to={'/add-task'} variant={'outlined'}>
                            {'Create One'}
                        </Button>
                    </Grid>
                </Grid>
            </Fragment>
        );

        return (
            <PageLayout>
                {tasks !== null ? <ListOfTasks/> : <NoTasksFound/>}
            </PageLayout>


        );
};

export default MyTasks;