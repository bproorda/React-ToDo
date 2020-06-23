import React from 'react';
import { useHistory  } from 'react-router-dom'
import './todos.scss'

export default function Todos(props) {

    let history = useHistory();

    return (
        <>
        <div id = "todoList">
        <button onClick={()=>history.push("./create")}>Create A New To Do</button>
        <p>Where are my To Dos!</p>
        </div>
        </>
    )
}