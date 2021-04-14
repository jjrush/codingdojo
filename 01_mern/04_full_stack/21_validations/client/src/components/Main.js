import React, { useState } from 'react';
import axios from 'axios';
const Main = () => {
    const [title, setTitle] = useState("");
    const [pages, setPages] = useState(0);
    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]); 
    const onSubmitHandler = e => {
        e.preventDefault();
        //Send a post request to our API to create a Bookcopy
        axios.post('http://localhost:8000/api/books', {
            title,
            pages
        })
            .then(res=>console.log(res)) // If successful, do something with the response. 
            .catch(err=>{
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })            
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                
                <p>
                    <label>Title</label>
                    <input type="text" onChange={e => setTitle(e.target.value)} />
                    { 
                        errors.title ? 
                            <p>{errors.title.message}</p>
                            : null
                    }
                </p>
                <p>
                    <label>Pages</label>
                    <input type="number" onChange={e => setPages(e.target.value)} />
                    { 
                        errors.numberOfPages ? 
                            <p>{errors.numberOfPages.message}</p>
                            : null
                    }
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Main