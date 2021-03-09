import React, { useState } from 'react';
import { API_URL } from '../../apiConstants';


function SignupForm(props) {
    // dconsole.log(props)
    const [first_name, setFirstNameChange] = useState('')
    const [last_name, setLastNameChange] = useState('')
    const [company_name, setCompany] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [user, setUser] = useState({})

    const handleFirstNameChange = (e) => {
        setFirstNameChange(e.target.value)
    }

    const handleLastNameChange = (e) => {
        setLastNameChange(e.target.value)
    }

    const handleCompanyChange = (e) => {
        setCompany(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = () => {
        debugger
        // console.log("user", user)
        // console.log("props", props)
        // setUser(user)
        // props.handleLogin(user)
        
    }

    const handleSubmit = (e) => {
        // console.log("signupform", props)
        e.preventDefault()
        fetch(API_URL + `/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                first_name,
                last_name,
                company_name,
                email,
                password
            })
        })
        
        .then(res => res.json())
        .then(data => {
            // debugger
            if (data.jwt) {
                localStorage.setItem("token", data.jwt)
                debugger
                props.handleLogin ? props.handleLogin(data.user) : handleLogin(data.user)
                alert("Your User Has Been Saved")
            } else {
                alert(data.errors.map( error => error))
            }
        })
        .catch(() => {
            alert("Unable to SignUp At This Time")
        })
        setFirstNameChange('')
        setLastNameChange('')
        setCompany('')
        setEmail('')
        setPassword('')
    }


    return (
        <div className="signup-form">
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>First Name</label>
                    <input type="text" onChange={handleFirstNameChange} value={first_name} />
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <input type="text" onChange={handleLastNameChange} value={last_name} />
                </div>
                <div className="field">
                    <label>Company</label>
                    <input type="text" onChange={handleCompanyChange} value={company_name} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" onChange={handleEmailChange} value={email} />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" onChange={handlePasswordChange} value={password} />
                </div>
                <button className="form-button" type="submit" >Submit</button>
            </form>
        </div>
    );
}

export default SignupForm;