// Button.js
import React from 'react';
import './Button.css';

export default function Button(props) {
    function handleClick(e) {
        e.preventDefault();
        console.log(props.text);
      }
    
    return (
        <button className='button' type='button' onClick={handleClick}>{props.text}</button>
    );
}