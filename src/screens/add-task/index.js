import React from "react";
import Typography from "@material-ui/core/Typography";
import PageLayout from "../../components/PageLayout";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";

const AddTask = () => {
    function newTask(e){

    }
    return (
        <PageLayout>

            <Grid container justify={'center'}>
                <Typography variant={'h2'}>
                    {'New Task:'}
                </Typography>

                <Grid container item xs={12} justify={'center'}>
                    <form titleForm autoComplete="off">
                        <Input variant={'outlined'} placeholder="Title " inputProps={{ 'aria-label': 'description' }} />
                    </form>
                </Grid>

                <Grid container item xs={12} justify={'center'}>
                    <form descForm autoComplete="off">
                        <Input variant={'outlined'} placeholder="Task Description" inputProps={{ 'aria-label': 'description' }} />
                    </form>
                </Grid>
                <Grid container item xs={12} justify={'center'}>
                    <Button component={Link} variant={'outlined'}>
                        {'Create'}
                    </Button>
                </Grid>
            </Grid>

        </PageLayout>
    )
};

export default AddTask;