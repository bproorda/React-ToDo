import React from 'react';
import logo from './squirrel.jpg';
import './header.scss';




export default function Header(props) {



    return (
        <>
        <header>
         <img src={logo} className="logo" alt="logo" />
         <h2>Brenn's To Do List</h2>
         </header>
        </>
    )
}
