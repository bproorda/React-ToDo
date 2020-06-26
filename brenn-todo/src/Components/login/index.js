import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import './login.scss'

export default function Login(props) {

    const [name, setName] = useState("");

    let history = useHistory();

    function submitHandler(e) {
        e.preventDefault();
        props.setUserName(name)
        e.target.reset();
        history.push('/todos');
    }

    function skipHandler(){
        history.push('/todos');
    }

    return (
        <>

            <form id="loginForm" onSubmit={submitHandler}>
                <h3>Please login</h3>
                <label className="loginInput">Enter your Name: <input name="password" onChange={(e) => setName(e.target.value)}/></label>
                <label className="loginInput">Enter your Password: <input type="password" name = "password"/></label>
                
                <button type='submit'>Log in</button>
                <button disabled type='button'>Register</button>
                <button type="button" onClick={skipHandler}>Skip</button>
            </form>
        </>
    )
}