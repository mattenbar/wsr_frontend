import React from 'react';
import SignupForm from './signupForm';

function popUpSignUp(props) {
    return (
        <div className="popup" id="popup"> 
            <div className="popup__content">
                <div className="leftpopupleft" ></div>
                <div className="popup__left">
                        <h1>Wealth</h1>
                        <h1>Solutions</h1>
                        <h1>Report</h1>
                </div>
                <div className="popup__right" >
                {/* eslint-disable-next-line */}
                    <a href="#" className="popup__close">&times;</a>
                    <h1 className="heading-secondary" >Sign UP</h1>
                    <h3 className="heading-tertiary">Create A Free Account</h3>
                    <SignupForm handleSignIn={props.handleSignIn} /> 
                    <h5 className="heading-tertiary">By clicking 'Submit' you agree to our Terms and Privacy Policies.</h5>
                </div>
            </div>
        </div>
    );
}

export default popUpSignUp;
