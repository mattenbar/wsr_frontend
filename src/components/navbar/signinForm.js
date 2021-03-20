import React, { useState } from 'react';
import { API_URL } from '../../apiConstants';
import history from '../../history';


function SigninForm(props) {
    // console.log("signinform", props)
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(API_URL + '/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        .then(res => res.json())
        .then(data => {
            // debugger
            if (data.failure) {
                alert(data.failure)
            }
            localStorage.setItem("token", data.jwt)
            alert(data.success)
            // props.handleLogIn(data.user)
            // debugger
        })
        history.back('/');
        setEmail('')
        setPassword('')
    }

    return (
        <div className="signin-form">
            <form className='form' onSubmit={handleSubmit}>
                <div className="field">
                    <label>Email</label>
                    <input type="email" onChange={handleEmailChange} value={email} />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" onChange={handlePasswordChange} value={password} />
                </div>
                <button className="form-button" type="submit" >Log In</button>
            </form>
        </div>
    );
}

export default SigninForm;