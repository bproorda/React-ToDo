import React, {useState} from 'react';
import './createToDo.scss';

export default function Create(props) {

    const [range, setRange] = useState(0);

    function SubmitHandler(e) {
        e.preventDefault();
        let newHistoryItem = {
            title: e.target.title.value,
            dueDate: e.target.dueDate.value,
            assignee: e.target.assignee.value,
            difficulty: e.target.difficulty.value,
            completed: false,
        }
        let newHistory = [newHistoryItem, ...props.history];
        //console.log(newHistoryItem);
        props.addToHistory(newHistory);
    }

    function rangeHandler(e) {
        let newRange = e.target.value;
        setRange(newRange);
    }

    return (
        <>
            <div id="create">
                <form onSubmit={SubmitHandler}>
                    <fieldset>
                        <legend>Create New To Do</legend>

                        <label name="title">To Do: </label>
                        <input name="title" type="text"></input>

                        <label name="dueDate">Due Date: </label>
                        <input name="dueDate" type="date"></input>

                        <label name="assignee">Assigned To: </label>
                        <input name="assignee" type="text"></input>

                        <label name="difficulty">Difficulty: {range !== 0 ? range : 5}</label>
                        <input onChange={rangeHandler} name="difficulty" type="range" min="0" max="5" step="1"></input>


                        <button type="submit">Create</button>
                        <button type="reset">Clear Form</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}