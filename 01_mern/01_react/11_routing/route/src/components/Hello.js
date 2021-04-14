import React, {useState, useEffect} from 'react';

const Hello = (props) => {
    const { word } = props;
    return (
        <div>
            <p>The word is: {word}</p>
        </div>
    )
}

export default Hello;