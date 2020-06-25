import React, { useState, useEffect } from 'react';
import './todos.scss';
import useSettings from '../../contexts/settings';

export default function Todos(props) {
    const {listOfTodos, updateStoredTodos } = props;
    const {numberPerPage, hideCompleted} = useSettings();
    const [completedCount, setCompletedCount] = useState(0);
    const [incompletedCount, setIncompletedCount] = useState(0);
    const [indexStart, setIndexStart] = useState(0);
    const [filteredTodos, setFilteredTodos] = useState(listOfTodos);
    const [pageCount, setPageCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);


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
        console.log("UseEffect is running");
        let Ccount = 0;
        let Icount = 0;
        listOfTodos.forEach(todo => {
            if (todo.completed) {
                Ccount++;
            } else {
                Icount++;
            }
        });
        let filterByCompletion = listOfTodos.filter((todo)=> hideCompleted ? todo.completed !== true : true );
        let filteredByPageNumber = filterByCompletion
        .slice(indexStart, (indexStart + numberPerPage));
        setFilteredTodos(filteredByPageNumber);
        console.log(filterByCompletion);
        console.log(filteredByPageNumber);
        setPageCount(Math.ceil(filterByCompletion.length / numberPerPage));
        setCompletedCount(Ccount);
        setIncompletedCount(Icount);
    }, [listOfTodos, indexStart, hideCompleted, numberPerPage]);
    

    function pageIncrement(){
        setIndexStart(indexStart ? indexStart + numberPerPage : numberPerPage);
      setCurrentPage(currentPage +1);
    }
    function pageDecrement(){
        setIndexStart(indexStart ? indexStart - numberPerPage : 0);
        setCurrentPage(currentPage - 1);
    }

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
                   
                   { pageCount !== 1 ?  <button onClick={pageDecrement}>Previous Page</button> : null}
                   {currentPage !== pageCount ? <button onClick={pageIncrement}>Next Page</button> : null}
                </div>
            </div>
        </>
    )
}