import React from 'react';
import SigninForm from './signinForm';

function popUpSignIn(props) {
    return (
        <div className="popup" id="popup2"> 
            <div className="popup__content">
                <div className="popup__left">

                </div>
                <div className="popup__right" >
                    <a href="#" className="popup__close">&times;</a>
                    <h1 className="heading-secondary" >Sign In</h1>
                    <h3 className="heading-tertiary">This should be a Sign Up Link</h3>
                    <SigninForm />
                </div>
            </div>
        </div>
    );
}

export default popUpSignIn;