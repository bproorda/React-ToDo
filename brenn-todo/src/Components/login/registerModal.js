import React from 'react';
import './login.scss'

export default function RegisterModal(props){

    let url = 'https://deltav-todo.azurewebsites.net/api/v1/Users/Register'

async function registerHandler(e){
    e.preventDefault();
    let form = e.target;
    let newUser ={
        email: form.email.value,
        roles: form.roles.value.split(", "),
        username: form.username.value,
        password: form.password.value,
    }
    let response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser),
    }); 
    console.log(response);
    form.reset();
    props.showRegister();


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