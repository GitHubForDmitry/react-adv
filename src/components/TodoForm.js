import React from 'react';

function TodoForm({addTask}) {

    const [newTask, setNewTask] = React.useState('');


    function handleSubmit(e) {
        e.preventDefault();
        addTask(newTask);
        setNewTask('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
            <button type="submit">add</button>
        </form>
    );
}

export default TodoForm;
