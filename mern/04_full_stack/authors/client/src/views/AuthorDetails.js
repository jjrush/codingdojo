import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm'

const AuthorDetails = (props) => {
    const [author, setAuthors] = useState({});
    const [loaded, setLoaded] = useState(false);
    const link = `http://localhost:8000/api/authors/${props.id}`;

    useEffect(() => {
        axios.get(link)
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
            })
    }, [])

    const updateAuthors = (e) => {
        author.name = e.name;
        axios.put(link, author)
            .then(navigate("/"));
    }

    return (
        <div>
            <p>Update an Author</p>
            { loaded && (
                <>
                    <AuthorForm
                        onSubmit={updateAuthors}
                        initName={author.name}
                    />
                </>
            )}
        </div>
    )
}
export default AuthorDetails;
