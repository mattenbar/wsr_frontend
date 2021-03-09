import React from 'react';
import FooterLinks from './footerLinks';
import FooterSocialMedia from './footerSocialMedia'

function footer(props) {
    return (
        <div className="footer-main">
            <div className="footer-links">
                <FooterLinks />
            </div>
            <div className="footer-social-media-links">
                <FooterSocialMedia />
            </div>
        </div>
    );
}

export default footer;