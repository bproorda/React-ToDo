import React, { useState } from 'react';
import './login.scss'

export default function RegisterModal(props){



function registerHandler(e){
    e.preventDefault();
console.log(e.target.roles.value);
}

    return (
        <>
        <div className="modalBackground">
            <div id="registerModal">
            <button onClick={props.showRegister}>Close</button>
            <form id="registerForm" onSubmit={registerHandler}>
                <label>Email: <input name="email" type="email"/></label>
                <label>Roles: <input name="roles" type="text" multiple/></label>
                <label>Username: <input name="username" type="text"/></label>
                <label>Password: <input name="password" type="password"/></label>
                <button type="submit">Register</button>
            </form>
            </div>
        </div>
        </>
    )
}