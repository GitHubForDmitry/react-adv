import React from 'react';

function TodoItem({task, editTask, completedTask}) {

    const [editing, setEditing] = React.useState(true);
    const [editTaskState, setEditTaskState] = React.useState('');

    function handleNewTaskSubmit(e) {
        e.preventDefault();
        editTask(task.id, editTaskState);
        setEditing(true)
    }

    const taskSimple = (
        <li>
            <span>{task.name}</span>
            <input type="checkbox" defaultChecked={task.completed} onClick={() => completedTask(task.id)}/>
            <button  onClick={() => setEditing(false)}>edit</button>
            <button onClick={() => setEditing(true)}>cancel</button>
        </li>
    );

    const formTask = (
        <form onSubmit={handleNewTaskSubmit}>
            <input type="text" onChange={(e) => setEditTaskState(e.target.value)}/>
            <button type="submit">save</button>
            <button type="button"  onClick={() => setEditing(true)}>cancel</button>
        </form>
    )
    return (
        <>
        { editing ? taskSimple : formTask }
        </>
    );
}

export default TodoItem;
