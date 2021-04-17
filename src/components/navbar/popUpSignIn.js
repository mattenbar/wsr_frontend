import React from 'react';
import SigninForm from './signinForm';

function popUpSignIn(props) {
    return (
        <div className="popup" id="popup2"> 
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
                    <h1 className="heading-secondary" >Sign In</h1>
                    <h3 className="heading-tertiary">Log In To Your Account</h3>
                    <SigninForm />
                </div>
            </div>
        </div>
    );
}

export default popUpSignIn;