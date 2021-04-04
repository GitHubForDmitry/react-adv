import React from 'react';
import TodoForm from "./components/TodoForm";
import FilterButton from "./components/FilterButton";
import {ButtonGroup, Container} from "react-bootstrap";
import {addTask, deleteTask, editThisTask, toggleTask} from "./store/actions";
import {connect} from "react-redux";
import TodoList from "./components/TodoList";

const filterButtons = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
}
function App(props) {

    const [filter, setFilter] = React.useState('All');
    const { addTask, deleteTask, editThisTask, toggleTask } = props;

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
            <TodoList
                editThisTask={editThisTask}
                deleteTask={deleteTask}
                filter={filter}
                filterButtons={filterButtons}
                toggleTask={toggleTask}
            />
        </Container>
    );
}


export default App;
