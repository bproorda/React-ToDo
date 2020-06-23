import React from 'react';
import './todos.scss'

export default function Todos(props) {

    return (
        <>
            <div id="todoList">
                <ul>
                    {props.history.map((todo, index) => (
                        <li key={index}>
                            <h3>To Do: {todo.title}</h3>
                            <p>Assigned to: {todo.assignee}</p>
                            <p>Due Date: {todo.dueDate}</p>
                            <p>Difficulty: {todo.difficulty}</p>
                        </li>

        ))}
                </ul>
            </div>
        </>
    )
}