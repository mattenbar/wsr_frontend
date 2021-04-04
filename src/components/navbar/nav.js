import React from "react";
import AuthButtons from "./authButtons";
import PopUpSignUp from "./popUpSignUp";
import PopUpSignIn from "./popUpSignIn";
import SocialMediaButtons from "./socialMediaButtons";
import SearchBar2 from "./searchBar2";
import { Link } from "react-router-dom";


function NavBar(props) {
  return (
    <>
      <div className="navbar">
        <div className="nav-left"></div>
        <div className="nav-right">
          <div className="nav-content">
            
            <div className="nav-header">
              <Link to={`/`}>
                <h1>Wealth</h1>
                <h1>Solutions</h1>
                <h1>Report</h1>
              </Link>
            </div>

            <div className="header-right">
              
              <div className="header-search-bar">
                <SearchBar2 search={props.search} />
              </div>
              
              <div className="mediaButtons">
                <SocialMediaButtons />
              </div>

              <div className="header-login-signup">
                <AuthButtons user={props.user.user} />
              </div>
            </div>
          </div>
        </div>
        <PopUpSignUp handleSignIn={props.handleSignIn} />
        <PopUpSignIn />
      </div>
    </>
  );
}

export default NavBar;
