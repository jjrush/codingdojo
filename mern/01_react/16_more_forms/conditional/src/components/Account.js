import React, { useState } from 'react';

const Account = () => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPass, setConfirmPass ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newAccount = {
            expFirstName: firstName,
            expLastName: lastName,
            expEmail: email,
            expPassword: password,
            expConfirmPass: confirmPass,
        }

        setFirstName("");
        setLastName("");   
        setEmail(0);
        setPassword("");
        setConfirmPass("");
    }





/*
first name must be more than 2 characters
email cannot be less than 5 characters
passwords must match and be 8 characters long at least
*/

    return (
        <div>
            <h3>Tell us about your Experience!</h3>
            <form onSubmit={ handleSubmit }>
                <div>
                    <label>Name: </label>
                    <input 
                        type="text"
                        name="firstName"
                        value={ firstName }
                        onChange={ (e) => setFirstName(e.target.value) }
                    />
                    {
                        firstName.length != 0 ?
                            firstName.length < 2 ?
                                <span>Name cannot be less than two (2) characters</span>
                                : null
                            : null
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input 
                        type="text"
                        name="lastName"
                        value={ lastName }
                        onChange={ (e) => setLastName(e.target.value) }
                    />
                    {
                        lastName.length != 0 ?
                            lastName.length < 2 ?
                                <span>Name cannot be less than two (2) characters</span>
                                : null
                            : null
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input 
                        type="text"
                        name="email"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                    {
                        email.length != 0 ?
                            email.length < 5 ?
                                <span>Email cannot be less than five (5) characters</span>
                                : null
                            : null
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input 
                        type="password"
                        name="password"
                        value={ password }
                        onChange={ (e) => setPassword(e.target.value) }
                    />
                    {
                        password.length != 0 ?
                            password.length < 9 ?
                                <span>Password must be at least eight (8) characters</span>
                                : null
                            : null
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input 
                        type="password"
                        name="password"
                        value={ confirmPass }
                        onChange={ (e) => setConfirmPass(e.target.value) }
                    />
                    {
                        confirmPass != "" ?
                            confirmPass === password ?
                                null
                                : <span>Passwords must match</span>
                            : null
                    }
                </div>
            </form>

            <h3>You typed in:</h3>
            <p>Name: { firstName }</p>
            <p>Last Name: { lastName }</p>
            <p>Email: { email }</p>
            <p>Password: { password }</p>
            <p>Confirm Password: { confirmPass }</p>
        </div>
    )
}

export default Account;