import React from 'react';
// import history from '../../history';
import { withRouter } from "react-router";
import {useSelector} from "react-redux";

function AuthButtons(props) {

    const user = useSelector(state => {
        return (state.user.user)
    })

    let userEmail 

    if (user !== undefined) {
        userEmail = user.email
    }
    

    const handleSignOut = () => {
        localStorage.removeItem("token")
        props.history.push('/');
    }

    if (localStorage.getItem("token") === null) {
        return (
            console.log("auth", userEmail),
            <div className="auth-buttons">
                <button className="auth-buttons__yellow"><a href="#popup2">Sign In</a></button>
                <span className="divider">|</span>
                <button className="auth-buttons__yellow" ><a href="#popup">Sign Up</a></button>
            </div>
        );
    } else {
        return (
            <div className="auth2-buttons">
                {userEmail}
                <span className="divider">&nbsp;&nbsp;|</span>
                <button className="auth-buttons__yellow" onClick={handleSignOut}>Sign Out</button>
            </div>
        )
    }
}

export default withRouter(AuthButtons);
