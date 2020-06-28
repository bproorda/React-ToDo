import React, { useState } from 'react';
import './login.scss'

export default function RegisterModal(props){
    return (
        <>
        <div className="modalBackground">
            <div id="registerModal">
            <button onClick={props.showRegister}>Close</button>
            </div>
        </div>
        </>
    )
}