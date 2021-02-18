import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard name={"Smith, Maria"} age={ 50 } color={ "Black" } />
      <PersonCard name={"Doe, Jane"} age={ 45 } color={ "Brown" } />
      <PersonCard name={"Smith, John"} age={ 88 } color={ "Brown" } />
      <PersonCard name={"Fillmore, Millard"} age={ 62 } color={ "Brown" } />
    </div>
  );
}

export default App;
