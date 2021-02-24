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
                </div>
                <div>
                    <label>Last Name: </label>
                    <input 
                        type="text"
                        name="lastName"
                        value={ lastName }
                        onChange={ (e) => setLastName(e.target.value) }
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <input 
                        type="text"
                        name="email"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input 
                        type="password"
                        name="password"
                        value={ password }
                        onChange={ (e) => setPassword(e.target.value) }
                    />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input 
                        type="password"
                        name="password"
                        value={ confirmPass }
                        onChange={ (e) => setConfirmPass(e.target.value) }
                    />
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