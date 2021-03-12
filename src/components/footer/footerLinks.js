import React from 'react';
import { Link } from 'react-router-dom'

function footerLinks(props) {
    return (
        <main className="footer-sections">
            <section className="footer">
                <ul className="nav">
                <li className="nav__item">
                        <Link to="/" className="nav__link">
                            HOME
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/about" className="nav__link">
                            ABOUT US
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/our-partners" className="nav__link">
                            OUR PARTNERS
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/our-board" className="nav__link">
                            OUR BOARD
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/contact-us" className="nav__link">
                            CONTACT US
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/archives" className="nav__link">
                            ARCHIVES
                        </Link>
                    </li>
                </ul>
            </section>
        </main>
    );
}

export default footerLinks;