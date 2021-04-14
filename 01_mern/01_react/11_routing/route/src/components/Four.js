import React, {useState, useEffect} from 'react';

const Four = (props) => {
    const {number} = props;
    return (
        <div>
            <p>The number is: {number}</p>
        </div>
    )
}

export default Four;