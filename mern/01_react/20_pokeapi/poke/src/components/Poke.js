import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Poke.css';

const Poke = (props) => {

const [ pokes, setPokes ] = useState([]);

const fetchPokemon = () => {


    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then((axiosResponse) => {
        setPokes(axiosResponse.data.results);
    })
    .catch((axiosErr) => {
        console.log("Axios Error");
        console.log(axiosErr);
    });
    
    
};

return (
    <div>
    <button onClick={fetchPokemon}>
        Fetch Pokemon
    </button>
    <ul>
    {
        pokes.map((poke, index) => (
        <div key={index}>
            <li>{poke.name}</li>
        </div>
        ))
    }
    </ul>
    </div>
)

}

export default Poke;