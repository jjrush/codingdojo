import React, {useState, useEffect} from 'react';
import './Fancy.css';
const Fancy = (props) => {
    const { word } = props;
    return (
        <div className="main-content">
            <p>The word is: {word}</p>
        </div>
    )
}

export default Fancy;