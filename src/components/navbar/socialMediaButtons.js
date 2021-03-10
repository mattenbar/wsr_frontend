import React from 'react';

function socialMediaButtons(props) {
    return (
        <div className="social-media-buttons">
            <a className="smb-individual" href=""><img className="smb-yellow" src='/linkedin-yellow.svg' /></a>
            <a className="smb-individual" href=""><img className="smb-yellow" src='/youtube-yellow.svg' /></a>
            <a className="smb-individual" href=""><img className="smb-yellow" src='/twitter-yellow.svg' /></a>
        </div>
    );
}

export default socialMediaButtons;