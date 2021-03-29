import React, { useState } from 'react';
import { navigate } from '@reach/router';
import { Card } from '@material-ui/core';
import { Link } from '@reach/router';
import axios from 'axios';
import '../css/authorForm.css';

const AuthorForm = () => {
    const [ initName, setInitName ] = useState("");
    const [ name, setName ] = useState(initName); 
    const [errors, setErrors] = useState([]); 

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log("name: " + name)

    }

    return (
        <form className="authorForm" onSubmit={onSubmitHandler}>
            <Link to={"/"}>
                <button className="btn-nav">Home</button>
            </Link>
            <Card className="card">
                <div className="div-block">
                    <label>Name:</label>
                    <input className="nameField" 
                        type="text" 
                        placeholder={name}
                        onChange = {(e)=>setName(e.target.value)}
                    />
                </div>
                <div className="div-block">
                    <button className="btn-default-style" onClick={() => {navigate("/")}}>Cancel</button>
                    <input className="btn-default-style" type="submit" value="Submit"/>
                    {
                        errors.name ? 
                            <p>{errors.name.message}</p>
                            : null
                    }
                </div>
            </Card>

        </form>
    )
}
export default AuthorForm;