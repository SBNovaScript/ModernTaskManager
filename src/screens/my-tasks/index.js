import React, {Fragment} from "react";
import PageLayout from "../../components/PageLayout";
import TaskCard from "../../components/TaskCard";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const MyTasks = () => (
    <PageLayout>
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
                            <Button size="small">Done!</Button>
                    </CardActions>
            </Card>
            <Card>
                    <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                    Task #2
                            </Typography>
                            <Typography variant="body2" component="p">
                                    Task Description
                            </Typography>
                    </CardContent>
                    <CardActions>
                            <Button size="small">Done!</Button>
                    </CardActions>
            </Card>
            <Card>
                    <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                    Task #3
                            </Typography>
                            <Typography variant="body2" component="p">
                                    Task Description
                            </Typography>
                    </CardContent>
                    <CardActions>
                            <Button size="small">Done!</Button>
                    </CardActions>
            </Card>
    </PageLayout>


);

export default MyTasks;