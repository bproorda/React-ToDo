import React from 'react';
import './todos.scss'

export default function Todos(props) {

    return (
        <>
            <div id="todoList">
                <ul>
                    {props.history.map((todo, index) => (
                        <li key={index} className={todo.completed ? "complete" : "incomplete"}>
                            <h3>To Do: {todo.title}</h3>
                            <p>Assigned to: {todo.assignee}</p>
                            <p>Due Date: {todo.dueDate}</p>
                            <p>Difficulty: {todo.difficulty}</p>
                            <div className="buttons">
                                <button>Mark Complete</button>
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