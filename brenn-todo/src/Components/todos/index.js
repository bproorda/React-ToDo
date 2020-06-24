import React, { useState, useEffect } from 'react';
import './todos.scss';

export default function Todos(props) {
    const [completedCount, setCompletedCount] = useState(0);
    const [incompletedCount, setIncompletedCount] = useState(0);
    const {listOfTodos, updateStoredTodos } = props;


    function toggleComplete(index) {
        let updatedTodos = listOfTodos.map((todo, id) => {
            if (id !== index) {
                return todo;
            } else {
                todo.completed = !todo.completed;
                return todo;
            }

        })
        //need to make put method...someday
        //props.addToHistory(updatedTodos);
    }

    async function deleteHandler(index) {
        let url = 'https://deltav-todo.azurewebsites.net/api/v1/Todos/' + index;
        let response = await fetch(url);
        console.log(response);
        updateStoredTodos();
    }

    useEffect(() => {
        let Ccount = 0;
        let Icount = 0;
        listOfTodos.forEach(todo => {
            if (todo.completed) {
                Ccount++;
            } else {
                Icount++;
            }
        });
        setCompletedCount(Ccount);
        setIncompletedCount(Icount);
    }, [listOfTodos])



    return (
        <>
            <div id="todoList">
                <div id="counters">
                    <h2>Incomplete To Dos: <span id="ic">{incompletedCount}</span></h2>
                    <h2>Completed To Dos: <span id="cc">{completedCount}</span></h2>
                </div>
                <ul>
                    {listOfTodos.map((todo, index) => (
                        <li key={todo.id} className={todo.completed ? "complete" : "incomplete"}>
                            <h3>To Do: {todo.title}</h3>
                            <p>Assigned to: {todo.assignedTo}</p>
                            {/* <p>Due Date: {todo.dueDate}</p> */}
                            <p>Difficulty: {todo.difficulty}</p>
                            <div className="buttons">
                                <button onClick={() => toggleComplete(index)}>Mark Complete</button>
                                <button>Edit</button>
                                <button onClick={() => deleteHandler(todo.id)}>Delete</button>
                            </div>
                        </li>

                    ))}
                </ul>
            </div>
        </>
    )
}