import React, { useState } from 'react';
import { API_URL } from '../../apiConstants';
import history from '../../history';

// redux hooks:
import { useSelector, useDispatch } from 'react-redux';

// action:
import { postUser, signupUser } from '../../actions/userAuth/signupUser';


function SignupForm(props) {
    // dconsole.log(props)
    const [first_name, setFirstNameChange] = useState('');
    const [last_name, setLastNameChange] = useState('');
    const [company_name, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [user, setUser] = useState({
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        company_name: ''
    });

    const dispatch = useDispatch();

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

    const handleLogin = (data) => {
        
        // console.log("user", user)
        // console.log("props", props)
        setUser({
            ...user,
            [user["id"]]: data.id,
            [user["first_name"]]: data.first_name,
            [user["last_name"]]: data.last_name,
            [user["email"]]: data.email,
            [user["company_name"]]: data.company_name

        })
        // debugger
        // props.handleLogin(user)
    }

    const handleSubmit = (e) => {
        // console.log("signupform", props)
        e.preventDefault()

        const user = {
            first_name: first_name,
            last_name: last_name,
            company_name: company_name,
            email: email,
            password: password
        }

        dispatch(signupUser(user))
  
        // .then(data => {
        //     // debugger
        //     if (data.jwt) {
        //         localStorage.setItem("token", data.jwt)
                
        //         props.handleLogin ? props.handleLogin(data.user) : handleLogin(data.user)
        //         // debugger
        //         alert("Successfully Signed Up")
        //     } else {
        //         alert(data.errors.map( error => error))
        //     }
        // })
        // .catch(() => {
        //     alert("Unable to SignUp At This Time")
        // })
        history.back('/');
        setFirstNameChange('')
        setLastNameChange('')
        setCompany('')
        setEmail('')
        setPassword('')
    }


    return (
        // console.log(user),
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
                    <input type="email" onChange={handleEmailChange} value={email} />
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