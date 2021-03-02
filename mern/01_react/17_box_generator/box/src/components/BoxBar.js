import React, { useState } from 'react';
import './BoxBar.css';

const BoxBar = ({setBox, box}) => {
    const [newColor, setNewColor] = useState("");

    const onChange = (e) => {
        setNewColor(e.target.value);
    };

    const grabColor = () => {
        setBox({
            ...box,
            colors: [...box.colors, newColor],
        });
        // clears out the input value attribute
        setNewColor("");
    };

    return (
        <div>
            <label>Color</label>
            <input
                onChange={onChange}
                type="text"
                value={newColor}
            />
            <button onClick={grabColor}>
                Add Box
            </button>
        </div>
        );
};

export default BoxBar;