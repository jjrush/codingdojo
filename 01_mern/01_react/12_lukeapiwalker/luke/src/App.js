import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import Display from './components/Display'

function App() {
    const [ display, setDisplay ] = useState([]);
    const [ choice, setChoice ] = useState("planets");
    const [ id, setID ] = useState(1);

    return (
        <div className="App">
            <SearchBar 
                id = {id}
                setID = {setID}
                choice = {choice}
                setChoice = {setChoice}
                display = {display}
                setDisplay = {setDisplay}
            />
            <Display
                display = {display}
                setDisplay = {setDisplay}
            />
        </div>
    );
}

export default App;