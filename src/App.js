import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {nanoid} from "nanoid";
import FilterButton from "./components/FilterButton";
import {ButtonGroup, Container} from "react-bootstrap";
const Tasks = [
    {id: 'todo-1', name: 'learn JavaScript', completed: false},
    {id: 'todo-2', name: 'learn React', completed: false},
    {id: 'todo-3', name: 'learn Redux', completed: true},
    {id: 'todo-4', name: 'learn Graphql', completed: false},
];

const filterButtons = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
}
function App(props) {

    const [tasks, setTasks] = React.useState(Tasks);
    const [filter, setFilter] = React.useState('All');

    function addTask(name) {
        const newTask = {id: `todo-${nanoid()}`, name, completed: false};

        setTasks([...tasks, newTask]);
    }

    function editTask(id, newName) {
        const newTasks = tasks.map(task => {
            if (task.id === id) {
                return {...task, name: newName}
            }
            return  task;
        })

        setTasks(newTasks);
    }

    function completedTask(id) {
        const newTasks = tasks.map(task => {
            if (task.id === id) {
                return {...task, completed: !task.completed}
            }
            return  task;
        })

        setTasks(newTasks);
    }

    const filterList = (
        Object.keys(filterButtons).map(name => (
            <FilterButton key={name} setFilter={setFilter} pressed={name === filter} name={name} />
        ))

    )
    return (
        <Container className="align-content-center m-2">
            <h1 className="text-primary">Filter Tasks</h1>
            <ButtonGroup className="mr-1">
                {filterList}
            </ButtonGroup>
            <TodoForm addTask={addTask} />
            <TodoList tasks={tasks} editTask={editTask} filter={filter} filterButtons={filterButtons} completedTask={completedTask}/>
        </Container>
    );
}

export default App;
