import React from 'react';
import './App.css';
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { nanoid } from "nanoid";

const Tasks = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
];
const FILTER_MAP  = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP)
function App(props) {

  const [tasks, setTasks] = React.useState(Tasks);
  const [filter, setFilter] = React.useState('All');
  const tasksNoun = tasks.length !== 1 ? 'tasks' : 'task';
  const headingText = `${tasks.length} ${tasksNoun} remaining`;
  const filterList = FILTER_NAMES.map(name => (
      <FilterButton key={name}
                    name={name}
                    isPressed={name === filter}
                    setFilter={setFilter}
      />
  ));

  function newTasks(name) {
      const newTask = { id: `todo-${nanoid}`, name: name, completed: false }

      return setTasks([...tasks, newTask])
  }

    function toggleTaskCompleted(id) {
        const updateTask = tasks.map(task => {

            if (id === task.id) {
               return {...task, completed: !task.completed}
            }

            return task;
        });

        setTasks(updateTask);
    }

    function deleteTask(id) {
        const task = tasks.filter(task => {

            if (id !== task.id) {
               return task
            }
        });

        return setTasks(task);
    }

    function editTask(id, newTask) {
        const taskList = tasks.map(task => {

            if (id === task.id) {
               return {...task, name: newTask}
            }

            return task;
        });

        setTasks(taskList);
    }

  return (
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>
          <Form addTask={newTasks} />
        <div className="filters btn-group stack-exception">
            {filterList}
        </div>
        <h2 id="list-heading">
            {headingText}
        </h2>
        <ul
            role="list"
            className="todo-list stack-large stack-exception"
            aria-labelledby="list-heading"
        >
            {tasks.filter(FILTER_MAP[filter]).map((item, index) => (
                <Todo key={index}
                      todo={item}
                      toggleTaskCompleted={toggleTaskCompleted}
                      deleteTask={deleteTask}
                      editTask={editTask}
                /> )
            )}
        </ul>
      </div>);
}

export default App;
