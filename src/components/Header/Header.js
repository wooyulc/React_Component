// Header.js
import React from 'react';
import './Header.css';

export default function Header(props) {
    return (
        <div className='header'>
            <h1> {props.title} </h1>
            <h2> {props.text} </h2>
        </div>
    );
}