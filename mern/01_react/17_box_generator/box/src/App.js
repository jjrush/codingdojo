import './App.css';
import BoxBar from './components/BoxBar';
import BoxDisplay from './components/BoxDisplay';
import React, { useState } from 'react';

function App() {
  const [box, setBox] = useState("There are no messages"); 
  return (
    <div className="App">
      <BoxBar 
        box = { box }
        setBox = { setBox }  
      />
      <BoxDisplay box={ box }/>
    </div>
  );
}

export default App;
