import React from 'react';
import axios from 'axios';

const Display = (props) => {
    const { display, setDisplay } = props;

    return (
        <div>
            {
                display ? () => {
                    display.map((e, index) => (
                        <div key={index}>
                            <p>{e.name}</p>
                        </div>
                    ))
                }
                : null
            }
        </div>
    )
}
{

            }
export default Display;