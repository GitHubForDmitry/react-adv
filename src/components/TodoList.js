import React from 'react';
import TodoItem from "./TodoItem";

function TodoList({tasks, editTask, filter, filterButtons, completedTask}) {
    return (
        <ul>
            {tasks.filter(filterButtons[filter]).map(task => <TodoItem key={task.id} task={task} editTask={editTask} completedTask={completedTask} />)}
        </ul>
    );
}

export default TodoList;
