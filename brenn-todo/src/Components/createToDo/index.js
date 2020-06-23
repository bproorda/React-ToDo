import React from 'react';
import './createToDo.scss';

export default function Create(props) {

    function SubmitHandler(e) {

    }
    return (
        <>
            <div id="create">
                <form onSubmit={SubmitHandler}>
                    <fieldset>
                        <legend>Create New To Do</legend>

                        <label name="title">To Do: </label>
                        <input name="title" type="text"></input>

                        <lablel name ="dueDate">Due Date: </lablel>
                        <input name="dueDate" type="date"></input>

                        <label name="assignee">Assigned To: </label>
                        <input name="assignee" type="text"></input>

                        <label name="difficulty">Difficulty: </label>
                        <input name="difficutly" type="range" min="0" max="11" step="1"></input>
                    </fieldset>
                </form>
            </div>
        </>
    )
}