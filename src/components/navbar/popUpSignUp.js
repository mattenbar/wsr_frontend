import React from 'react';
import SignupForm from './signupForm';

function popUpSignUp(props) {
    // console.log("popupsignup", props)
    return (
        <div className="popup" id="popup"> 
            <div className="popup__content">
                <div className="popup__left">

                </div>
                <div className="popup__right" >
                    <a href="#" className="popup__close">&times;</a>
                    <h1 className="heading-secondary" >Sign UP</h1>
                    <h3 className="heading-tertiary">This should be a LogIn Link</h3>
                    <SignupForm handleSignIn={props.handleSignIn} /> 
                </div>
            </div>
        </div>
    );
}

export default popUpSignUp;