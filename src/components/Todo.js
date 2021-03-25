import React, { useState } from 'react';

function Todo({todo, toggleTaskCompleted, deleteTask, editTask}) {

    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');

    function handleChange(e) {
        setNewName(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        editTask(todo.id, newName);
        setNewName("");
        setEditing(false);
    }
    const editingTemplate = (
        <form className="stack-small" onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="todo-label" htmlFor={todo.id}>
                    New name for {todo.name}
                </label>
                <input id={todo.id} className="todo-text" type="text"
                       value={newName}
                       onChange={handleChange}
                />
            </div>
            <div className="btn-group">
                <button type="button" className="btn todo-cancel" onClick={() => setEditing(false)}>
                    Cancel
                    <span className="visually-hidden">renaming {todo.name}</span>
                </button>
                <button type="submit" className="btn btn__primary todo-edit" onClick={() => editTask(todo.id)}>
                    Save
                    <span className="visually-hidden">new name for {todo.name}</span>
                </button>
            </div>
        </form>
    );
    const viewTemplate = (
        <div className="stack-small">
            <div className="c-cb">
                <input
                    id={todo.id}
                    type="checkbox"
                    defaultChecked={todo.completed}
                    onChange={() => toggleTaskCompleted(todo.id)}
                />
                <label className="todo-label" htmlFor={todo.id}>
                    {todo.name}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn" onClick={() => setEditing(true)}>
                    Edit <span className="visually-hidden">{todo.name}</span>
                </button>
                <button
                    type="button"
                    className="btn btn__danger"
                    onClick={() => deleteTask(todo.id)}
                >
                    Delete <span className="visually-hidden">{todo.name}</span>
                </button>
            </div>
        </div>
    );

    return (
        <li key={todo.id} className="todo stack-small">
            {isEditing ? editingTemplate : viewTemplate}
        </li>
    );
}

export default Todo;
