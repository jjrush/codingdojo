import React, { useState } from 'react';

const BoxDisplay = ({ color }) => {
    const boxColor = {
        backgroundColor: [color],
        width: "300px",
        height: "300px",
        display: "inline-block",
    };
    return <div className="rounded m-2" style={boxColor}></div>;
};

export default BoxDisplay;