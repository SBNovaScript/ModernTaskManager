import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import PageLayout from "../../components/PageLayout";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import {addTodo} from "../../actions";
import {connect} from "react-redux";

const AddTask = ({dispatch}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const addTitle = event => {
        setTitle(event.target.value);
    };

    const addDescription = event => {
        setDescription(event.target.value);
    };

    const addNewTask = () => {
        dispatch(addTodo({title, description}));
    };

    return (
        <PageLayout>
            <Grid container justify={'center'} spacing={2}>
                <Typography variant={'h2'}>
                    {'New Task:'}
                </Typography>

                <Grid container item xs={12} justify={'center'}>
                    <form autoComplete="off">
                        <Input variant={'outlined'} placeholder="Title " inputProps={{ 'aria-label': 'description' }} onChange={addTitle}/>
                    </form>
                </Grid>

                <Grid container item xs={12} justify={'center'}>
                    <form autoComplete="off">
                        <Input variant={'outlined'} placeholder="Task Description" inputProps={{ 'aria-label': 'description' }} onChange={addDescription}/>
                    </form>
                </Grid>
                <Grid container item xs={12} justify={'center'}>
                    <Button component={Link} to={'/'} variant={'outlined'} onClick={addNewTask}>
                        {'Create'}
                    </Button>
                </Grid>
            </Grid>
        </PageLayout>
    )
};

export default connect()(AddTask);