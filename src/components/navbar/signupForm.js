import React, { useState } from 'react';
import history from '../../history';

// redux hooks:
import { useSelector, useDispatch } from 'react-redux';

// action:
import { signupUser } from '../../actions/userAuth/signupUser';


function SignupForm(props) {

    const signedinUser = useSelector((state) => {
        return state.user
    })

    const [first_name, setFirstNameChange] = useState('');
    const [last_name, setLastNameChange] = useState('');
    const [company_name, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            first_name: first_name,
            last_name: last_name,
            company_name: company_name,
            email: email,
            password: password
        }

        dispatch(signupUser(user))
                
        setFirstNameChange('')
        setLastNameChange('')
        setCompany('')
        setEmail('')
        setPassword('')
        
        history.back('/');
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