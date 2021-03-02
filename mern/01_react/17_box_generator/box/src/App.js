import './App.css';
import BoxBar from './components/BoxBar';
import BoxDisplay from './components/BoxDisplay';
import React, { useState } from 'react';

function App() {
    const [box, setBox] = useState({
        colors: [],
    });
    
    return (
        <div className="App">
            <BoxBar setBox={setBox} box={box} />
            <div className="row">
                {box.colors.map((color) => (
                <BoxDisplay color={color} />
                ))}
            </div>
        </div>
    );
}

export default App;
