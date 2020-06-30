import React from 'react';
import logo from './squirrel.jpg';
import LogButton from '../auth/logButton'
import './header.scss';




export default function Header(props) {

    let altName = "Squirrel's"

    return (
        <>
            <header>
                <img src={logo} id="logo" alt="logo" />
                <h2>
                    <b>{props.userName ? props.userName + "'S" : altName}</b>
                    <p> To Do List</p>
                </h2>
                <div id="headerBtn">
                    <LogButton />
                </div>
            </header>
        </>
    )
}
