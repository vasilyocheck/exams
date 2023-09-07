import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Input} from "./components/Input";

type TodosType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

type FilterTasksType = 'all' | 'active' | 'completed';

function App() {
    const [todos, setTodos] = useState<TodosType[]>([]);
    const [taskFilter, setTaskFilter] = useState<FilterTasksType>('all');
    const newTitle = useRef<HTMLInputElement>(null);
    const fetchFunc = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json));
    }
    useEffect(() => {
        fetchFunc();
    }, []);

    let filteredTasks = todos;

    if(taskFilter === 'all') {
        filteredTasks = todos;
        console.log(filteredTasks);
    }
    if (taskFilter === 'active') {
        filteredTasks = todos.filter(t => !t.completed);
    }
    if (taskFilter === 'completed') {
        filteredTasks = todos.filter(t => t.completed);
    }

    const changeFilter = (filterValue: FilterTasksType) => {
        setTaskFilter(filterValue);
    }


    const removeTodolist = () => {
        setTodos([]);
    }

    const showTodolist = () => {
        fetchFunc();
    }
    const addNewTask = () => {
        if(newTitle.current) {
            const newTask: TodosType = {userId: 666, id: 666, title: newTitle.current.value, completed: false};
            setTodos([newTask, ...todos]);
            newTitle.current.value = '';
        }
    }

    const mappedTodos = filteredTasks.map(el => {
        return (
            <li key={el.id}>
                <span>{el.id} - </span>
                <span>{el.userId} - </span>
                <span>{el.title} - </span>
                <input type='checkbox' checked={el.completed}/>
            </li>
        );
    })

    return (
        <div className="App">
            <div>
                <h1>Todolist</h1>
                <div>
                    <Button name='remove todolist' callback={removeTodolist}/>
                    <Button name='show todolist' callback={showTodolist}/>
                </div>
                <Input newTitle={newTitle} callback={addNewTask}/>
                <Button name='+' callback={addNewTask} />
            </div>
            <button onClick={() => changeFilter('all')}>All</button>
            <button onClick={() => changeFilter('active')}>Active</button>
            <button onClick={() => changeFilter('completed')}>Completed</button>
            <ul>
                {mappedTodos}
            </ul>
        </div>
    );
}

export default App;
