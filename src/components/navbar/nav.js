import React from "react";
import AuthButtons from './authButtons';

const NavBar = (props) => {
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
        </div>
    );
};

export default NavBar;
