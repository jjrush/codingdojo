import React from 'react';
import './SearchBar.css';
import axios from 'axios';

const SearchBar = (props) => {
    const { id, setID, choice, setChoice, display, setDisplay } = props;

    const fetchData = () => {
        axios.get(`https://swapi.dev/api/${choice}/${id}`)
        .then((axiosResponse) => {
            setDisplay(axiosResponse.data.results);
        })
        .catch((axiosErr) => {
            console.log("Axios Error");
            console.log(axiosErr);
        });
    }

    return (
        <div className="search">
            <label for="search">Search for: </label>
            <select name="search" className="options" onChange={ (e) => setChoice(e.target.value) }>
                <option value="planets">planets</option>
                <option value="people">people</option>
                <option value="starships">starships</option>
                <option value="vehicles">vehicles</option>
                <option value="films">films</option>
                <option value="species">species</option>
            </select>

            <label for="id" className="id-label">ID: </label>
            <input name="id" value={id} className="options id-label" onChange={ (e) => setID(e.target.value) }> 
            </input>

            <button onClick={fetchData}>
                <h3>Search</h3>
            </button>
        </div>
    )
}

export default SearchBar;