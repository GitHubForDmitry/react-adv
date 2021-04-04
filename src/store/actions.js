import {ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK} from "./types";

export const addTask = (newTask) => {
    return {
        type: ADD_TASK,
        payload: newTask
    }
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}

export const editThisTask = (props) => {
    return {
        type: EDIT_TASK,
        payload: props
    }
}

export const toggleTask = (id) => {
    return {
        type: TOGGLE_TASK,
        payload: id
    }
}

