import './App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import Four from './components/Four';
import Hello from './components/Hello';
import Fancy from './components/Fancy';

function App() {

    return (
        <div className="App">
            <Router>
                <Home path={"/home"} default/>
                <Four path={"/4"} number={"4"}/>
                <Hello path={"/hello"} word={"hello"}/>
                <Fancy path={"/hello/blue/red"} word={"hello"}/>  
            </Router>
        </div>
    );
}

export default App;