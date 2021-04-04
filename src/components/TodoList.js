import React from 'react';
import TodoItem from "./TodoItem";
import {ListGroup} from "react-bootstrap";

function TodoList({tasks, editTask, filter, filterButtons, completedTask}) {
    return (
        <ListGroup>
            {tasks.filter(filterButtons[filter]).map(task => <TodoItem key={task.id} task={task} editTask={editTask} completedTask={completedTask} />)}
        </ListGroup>
    );
}

export default TodoList;
