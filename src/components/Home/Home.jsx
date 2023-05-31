import React, { useState } from "react";

import style from './Home.module.css'
import TodoForm from '../TodoForm/TodoForm'
import TodoItem from "./Item/TodoItem";
import WithoutTask from "../WithoutTask/WithoutTask";
import TaskInfo from "../TaskInfo/TaskInfo";


const Home = () => {
  
    const [todos, setTodos] = useState([{ id: 0, title: 'Finish learning css', isCompleted: false }, { id: 1, title: 'Finish learning css', isCompleted: false }]);

    // Add task 
    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substring(2, 9),
                title: userInput,
                isCompleted: false
            }
            setTodos([...todos, newItem])
        }
    };
    const handlerToggle = (id) => {
        setTodos([...todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo }
        )])
    }
    // Delete task 
    const deleteTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }
    return (
        <div className={style.home}>
            <TodoForm addTask={addTask} />
            <TaskInfo quantity={todos.length} completedLength={todos.filter((todo) => todo.isCompleted === true).length}/>
            {(todos.length > 0 ?
                todos.map((todo, index) => (
                    <TodoItem key={index}
                        todo={todo}
                        toggleTask={handlerToggle}
                        removeTask={deleteTask}
                    />)
                ) : <WithoutTask />)}
        </div>
    );
};
export default Home;