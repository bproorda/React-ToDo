import React from 'react';
import hide from './hide.jpg';
import './createToDo.scss';

export default function CantCreate(){


    return (
        <>
        <div className="create">
            <h2>Please log in to add a new To Do</h2>
            <img src={hide} id="logo" alt="logo" />
        </div>
        </>
    )

}