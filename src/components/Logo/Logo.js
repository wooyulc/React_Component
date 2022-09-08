// Logo.js
import React from 'react';
import './Logo.css';

export default function Logo(props) {
    return (
        <a className="logo" href='#'>
        <img
            src= {props.url}
            alt="Simple Menu Factory"
        />
        </a>
    );
}