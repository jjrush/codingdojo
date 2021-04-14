import React from 'react';
import axios from 'axios';

const Display = (props) => {
    const { display, setDisplay } = props;

    return (
        <div>
            <h2>Name: 
            {
                display.name
            }
            </h2>
        </div>
    )
}
{

            }
export default Display;