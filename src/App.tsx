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

function App() {
    const [todos, setTodos] = useState<TodosType[]>([]);
    let newTitle = useRef<HTMLInputElement>(null);
    const fetchFunc = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json));
    }
    useEffect(() => {
        fetchFunc();
    }, []);

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

    const mappedTodos = todos.map(el => {
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
            <ul>
                {mappedTodos}
            </ul>
        </div>
    );
}

export default App;
