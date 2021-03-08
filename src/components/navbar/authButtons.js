import React from 'react';

function authButtons(props) {
    return (
        <div className="auth-buttons">
            <button className="auth-buttons__yellow">Sign Up</button>
            <span className="divider">|</span>
            <button className="auth-buttons__yellow">Sign In</button>
        </div>
    );
}

export default authButtons;