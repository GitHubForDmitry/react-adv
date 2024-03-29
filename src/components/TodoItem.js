import React from 'react';
import {Button, Form, ListGroup} from "react-bootstrap";

function TodoItem({task, editThisTask, toggleTask, deleteTask}) {

    const [editing, setEditing] = React.useState(true);
    const [editTaskState, setEditTaskState] = React.useState('');
    function handleNewTaskSubmit(e) {
        e.preventDefault();
        editThisTask({id: task.id, name: editTaskState})
        setEditing(true)
    }

    const taskSimple = (
        <ListGroup.Item as="li">
            <p>{task.name}</p>
            <Form.Check className="mb-1" type="checkbox" defaultChecked={task.completed} onClick={() => toggleTask(task.id)}/>
            <Button className="mr-1" onClick={() => setEditing(false)} variant="success">edit</Button>
            <Button onClick={() => deleteTask(task.id)} variant="danger">delete</Button>
        </ListGroup.Item>
    );

    const formTask = (
        <Form onSubmit={handleNewTaskSubmit}>
            <Form.Group>
                <p>Edit task {task.name}</p>
                <Form.Control className="mb-1" type="text" onChange={(e) => setEditTaskState(e.target.value)}/>
                <Button className="mr-1"  variant="success" type="submit">save</Button>
                <Button variant="danger" type="button" onClick={() => setEditing(true)}>cancel</Button>
            </Form.Group>
        </Form>
    )
    return (
        <>
        { editing ? taskSimple : formTask }
        </>
    );
}


export default TodoItem;
