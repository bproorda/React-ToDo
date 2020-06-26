import React from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../contexts/auth';

export default function LogButton(props){

    const {user, logout} = useAuth();
    let history = useHistory();

    function loginRedirect(){
        history.push('/');
    }

    return (
        <>
        {user ? <button className="logBtn" onClick={logout}>Log Out</button> 
        : <button className="logBtn" onClick={loginRedirect}>Log In</button> }
        </>
    )
}