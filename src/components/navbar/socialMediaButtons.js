import React from 'react';

function socialMediaButtons(props) {
    return (
        <div className="social-media-buttons">
            <a className="smb-individual" href="https://www.linkedin.com/company/wealth-solutions-report/" target="_blank" rel="noreferrer"><img className="smb-yellow" src='/linkedin-yellow.svg' alt=""/></a>
            <a className="smb-individual" href="https://www.youtube.com/channel/UC82poR-uHco7VWuZZmuOd5g" target="_blank" rel="noreferrer"><img className="smb-yellow" src='/youtube-yellow.svg' alt=""/></a>
            <a className="smb-individual" href="https://www.twitter.com/wealth_report" target="_blank" rel="noreferrer"><img className="smb-yellow" src='/twitter-yellow.svg' alt=""/></a>
        </div>
    );
}

export default socialMediaButtons;