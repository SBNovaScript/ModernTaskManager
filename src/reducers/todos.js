import {ADD_TODO} from "../constants/actions";

const initialState = [];

const todos = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODO:
            console.log(action.title, action.description);
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    description: action.description
                }
            ];

        default:
            return state;

    }
};

export default todos;