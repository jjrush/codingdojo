import React, { useState } from 'react';
import './BoxBar.css';

const BoxBar = () => {
    const [ box, setBox ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setBox( e.target.value )
        e.target.value=""
    }

    return (
        <form>
            <label>Color</label>
            <input 
                type="text"
            />
            <button value="test" onClick={ handleSubmit }>Add</button>
        </form>
    )
}

export default BoxBar;