import React, { useState, useEffect } from 'react';
import './todos.scss';
import useSettings from '../../contexts/settings';

export default function Todos(props) {
    const [completedCount, setCompletedCount] = useState(0);
    const [incompletedCount, setIncompletedCount] = useState(0);
    const {listOfTodos, updateStoredTodos } = props;
    const {numberPerPage, hideCompleted} = useSettings();
    const [indexStart, setIndexStart] = useState();
    const [filteredTodos, setFilteredTodos] = useState( initialFilter());
    


    function initialFilter(){
        if(!hideCompleted) {
           let filteredTodos = listOfTodos.filter((todo, index) => index <  numberPerPage )
            return filteredTodos
        } else {
            let filteredTodos = listOfTodos.filter((todo) => !todo.completed);
            filteredTodos = filteredTodos.filter((todo, index) => index <  numberPerPage )
            return filteredTodos;
        }
    }

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
        let response = await fetch(url, {method: "delete"});
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
    
    // useEffect(() =>{
    //     if(!hideCompleted) {
    //         let filteredTodos = listOfTodos.filter((todo, index) => index > indexStart && index <  (indexStart + numberPerPage) )
    //          setFilteredTodos(filteredTodos);
    //      } else {
    //          let filteredTodos = listOfTodos.filter((todo) => !todo.completed);
    //          filteredTodos = filteredTodos.filter((todo, index) => index > indexStart && index <  (indexStart + numberPerPage) )
    //          setFilteredTodos(filteredTodos);
    //      }
    // }, [indexStart]);

    // useEffect(() => {
    //     if(!hideCompleted) {
    //         setFilteredTodos(listOfTodos);
    //     } else {
    //         let filteredTodos = listOfTodos.filter(todo => !todo.completed );
    //         setFilteredTodos(filteredTodos);
    //     }
    // }, [hideCompleted, listOfTodos]);

    return (
        <>
            <div id="todoList">
                <div id="counters">
                    <h2>Incomplete To Dos: <span id="ic">{incompletedCount}</span></h2>
                    <h2>Completed To Dos: <span id="cc">{completedCount}</span></h2>
                </div>
                <ul>
                    {filteredTodos.map((todo, index) => (
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
                <div id="pageButtons">
                    <button onClick={() => setIndexStart(indexStart ? indexStart - numberPerPage : 0)}>Previous Page</button>
                    <button onClick={() => setIndexStart(indexStart ? indexStart + numberPerPage : numberPerPage)}>Next Page</button>
                </div>
            </div>
        </>
    )
}