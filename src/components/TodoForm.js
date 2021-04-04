import React from 'react';
import {Button, Col, Form} from "react-bootstrap";

function TodoForm({addTask}) {

    const [newTask, setNewTask] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();
        addTask(newTask);
        setNewTask('')
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Row className="align-items-center mb-2">
                <Col xs="auto">
                    <Form.Control
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Add task"
                        className="mr-2"
                    />
                </Col>
                <Col xs="auto">
                    <Button type="submit" variant="primary">Add</Button>
                </Col>
            </Form.Row>
        </Form>

    );
}

export default TodoForm;
