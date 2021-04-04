import {ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK} from "./types";
import {nanoid} from "nanoid";

const initialState = {
    tasks: [
        {id: 'todo-1', name: 'learn JavaScript', completed: false},
        {id: 'todo-2', name: 'learn React', completed: false},
        {id: 'todo-3', name: 'learn Redux', completed: true},
        {id: 'todo-4', name: 'learn Graphql', completed: false},
    ]
    // filters: {}
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const task = {id: `todo-${nanoid()}`, name: action.payload, completed: false};
            return {...state, tasks: [...state.tasks, task]}
        case DELETE_TASK:
            console.log('DELETE_TASK reducer')
            return {...state, tasks: state.tasks.filter(task => task.id !== action.payload)}
        case EDIT_TASK:
            const newTasks = state.tasks.map(task => {
                if (task.id === action.payload.id) {
                    return {...task, name: action.payload.name}
                }
                return task;
            })

            return {...state, tasks: newTasks}
        case TOGGLE_TASK:
            const toggleTasks = state.tasks.map(task => {
                if (task.id === action.payload) {
                    return {...task, completed: !task.completed}
                }
                return task;
            })

            return {...state, tasks: toggleTasks}
        default:
            return state
    }
}
