import React, {useState} from 'react';
import './login.scss'

export default function Login(props){

    const [name, setName] = useState("");

    function submitHandler(e){
        e.preventDefault();
        props.setUserName(name)
        e.target.reset();
    }
 
    return(
        <>
        <form onSubmit={submitHandler}>
            <label>Enter your Name:</label>
            <input onChange={(e) => setName(e.target.value)}></input>
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}