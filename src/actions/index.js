import {ADD_TODO} from "../constants/actions";

let nextTodoId = 0;
export const addTodo = ({title, description}) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    title: title,
    description: description
});