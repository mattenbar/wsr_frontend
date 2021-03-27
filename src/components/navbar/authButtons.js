import React from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'
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
                
                { user.admin === undefined || user.admin === false &&
                    <>
                        {userEmail}
                        <span className="divider">&nbsp;&nbsp;|</span>
                        <button className="auth-buttons__yellow" onClick={handleSignOut}>Sign Out</button>
                    </>
                }
                { user.admin === true &&
                    <>
                        <Link to='/admin' className="adminButton" >ADMIN DASHBOARD</Link>
                        <span className="divider">&nbsp;&nbsp;|</span>
                        <button className="auth-buttons__yellow" onClick={handleSignOut}>Sign Out</button>
                    </>
                }
            </div>
        )
    }
}

export default withRouter(AuthButtons);
