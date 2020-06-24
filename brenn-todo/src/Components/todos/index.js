import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/fetch';

import './todos.scss';

export default function Todos(props) {
    const [completedCount, setCompletedCount] = useState(0);
    const [incompletedCount, setIncompletedCount] = useState(0);
    const {listOfTodos} = props;


    // function toggleComplete(index) {
    //     let updatedTodos = props.history.map((todo, id) => {
    //         if (id !== index) {
    //             return todo;
    //         } else {
    //             todo.completed = !todo.completed;
    //             return todo;
    //         }

    //     })
    //     props.addToHistory(updatedTodos);
    // }

    // useEffect(() => {
    //     let Ccount = 0;
    //     let Icount = 0;
        //let array = data;
        // data.forEach(todo => {
        //     if (todo.completed) {
        //         Ccount++;
        //     } else {
        //         Icount++;
        //     }
    //     });
    //     setCompletedCount(Ccount);
    //     setIncompletedCount(Icount);
    // }, [data])



    return (
        <>
            <div id="todoList">
                <div id="counters">
                    <h2>Incomplete To Dos: <span id="ic">{incompletedCount}</span></h2>
                    <h2>Completed To Dos: <span id="cc">{completedCount}</span></h2>
                </div>
                <ul>
                    {listOfTodos.map((todo, index) => (
                        <li key={index} className={todo.completed ? "complete" : "incomplete"}>
                            <h3>To Do: {todo.title}</h3>
                            <p>Assigned to: {todo.assignedTo}</p>
                            {/* <p>Due Date: {todo.dueDate}</p> */}
                            <p>Difficulty: {todo.difficulty}</p>
                            <div className="buttons">
                                {/* <button onClick={() => toggleComplete(index)}>Mark Complete</button> */}
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </li>

                    ))}
                </ul>
            </div>
        </>
    )
}