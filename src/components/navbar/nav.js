import React from "react";
import AuthButtons from './authButtons';
import PopUpSignUp from './popUpSignUp'
import PopUpSignIn from './popUpSignIn'

const NavBar = (props) => {
    // console.log("navbar", props)
    return (
        <div className="navbar">
            <div className="nav-header">
                <h1>Wealth</h1>
                <h1>Solutions</h1>
                <h1>Report</h1>
            </div>
            <div className="header-login-signup">
                <AuthButtons/>
            </div>
            <PopUpSignUp handleSignIn={props.handleSignIn} />
            <PopUpSignIn />
        </div>
    );
};

export default NavBar;
