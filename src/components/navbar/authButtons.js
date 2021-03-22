import React from 'react';
// import history from '../../history';
import { withRouter } from "react-router";

function authButtons(props) {

    const handleSignOut = () => {
        localStorage.removeItem("token")
        props.history.push('/');
    }
    
    // if (props.user.id === undefined) {
        if (localStorage.getItem("token") === null) {
        return (
            // console.log("auth", props),
            <div className="auth-buttons">
                <button className="auth-buttons__yellow"><a href="#popup2">Sign In</a></button>
                <span className="divider">|</span>
                <button className="auth-buttons__yellow" ><a href="#popup">Sign Up</a></button>
            </div>
        );
    } else {
        return (
            <div className="auth-buttons">
                <button className="auth-buttons__yellow" onClick={handleSignOut}>Sign Out</button>
            </div>
        )
    }
}

export default withRouter(authButtons);
