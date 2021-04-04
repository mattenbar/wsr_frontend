import React, { useState } from 'react';
import history from '../../history';

// redux hooks:
import { useDispatch } from 'react-redux';

// action:
import { signinUser } from '../../actions/userAuth/signinUser'

function SigninForm(props) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            email: email,
            password: password
        }

        dispatch(signinUser(user))
        
        setEmail('')
        setPassword('')

        history.back('/');
    }

    return (
        <div className="signin-form">
            <form className='form' onSubmit={handleSubmit}>
                <div className="field">
                    <label>Email</label><br />
                    <input type="email" onChange={handleEmailChange} value={email} />
                </div>
                <div className="field">
                    <label>Password</label><br />
                    <input type="password" onChange={handlePasswordChange} value={password} />
                </div>
                <button className="form-button" type="submit" >Log In</button>
            </form>
        </div>
    );
}

export default SigninForm;