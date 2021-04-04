import React from 'react';
import TodoItem from "./TodoItem";
import {ListGroup} from "react-bootstrap";
import {connect, useSelector} from "react-redux";
import {addTask, deleteTask, editThisTask, toggleTask} from "../store/actions";

function TodoList({filter, filterButtons}, props) {
    const { tasks } = useSelector(state => state);

    return (
        <ListGroup>
            {tasks.map(task => <TodoItem key={task.id} task={task} deleteTask={props.deleteTask} editThisTask={editThisTask} toggleTask={toggleTask}/>)}
        </ListGroup>
    );
}
const putStateToProps = state => {
    return state;
}
const putActionsToProps = {
    addTask,
    deleteTask,
    editThisTask,
    toggleTask
}

export default connect(putStateToProps, putActionsToProps)(TodoList);
