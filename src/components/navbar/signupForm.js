import React, { useState } from 'react';
import history from '../../history';
// redux hooks:
import { useDispatch } from 'react-redux';
// action:
import { signupUser } from '../../actions/userAuth/signupUser';

function SignupForm(props) {
    const [first_name, setFirstNameChange] = useState('');
    const [last_name, setLastNameChange] = useState('');
    const [company_name, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('')

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

    const handlePasswordConfirmationChange = (e) => {
        setPasswordConfirmation(e.target.value)
    }

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()

        if (password=== password_confirmation) {

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
        } else {
            alert("Please make sure Password and Password Confirmation Fields Match")
        }  
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
                    <label>Password</label><br />
                    <label style={{fontSize: ".75vw"}} >(*must be 8 characters include 1 Capital Letter, 1 Special Character & 1 Number)</label>
<<<<<<< HEAD
                    <input type="password" onChange={handlePasswordChange} value={password} pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/>
=======
                    <input type="password" onChange={handlePasswordChange} value={password} pattern="^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/>
>>>>>>> a31722ab505359a8e394e9f5a850a901e44f7f51
                </div>
                <div className="field">
                    <label>Password Confirmation</label>
                    <input type="password" onChange={handlePasswordConfirmationChange} value={password_confirmation} />
                </div>
                <button className="form-button" type="submit" >Submit</button>
            </form>
        </div>
    );
}

export default SignupForm;