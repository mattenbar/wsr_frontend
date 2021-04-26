import React, {useEffect} from "react";

function Contact(props) {
    useEffect(() => {
        document.title = 'Contact Us | Wealth Solutions Report';
    });

    return (
        <div className="board">
            <div className="board-header">
                <h1>CONTACT US</h1>
            </div>
            <div className="contact_us">
                <p>
                    If you have any questions or concerns or would like to
                    submit a correction or ask for clarification, please contact
                    us at{" "}
                    <a
                        href="mailto:info@wealthsolutionsreport.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        info@wealthsolutionsreport.com
                    </a>
                </p>

                <div className="blackLine"></div>
                <br />
                <p className="shortenP">
                    For submitting opinion or commentary articles or information
                    regarding M&A transactions or new recruitments, please
                    contact us at{" "}
                    <a
                        href="mailto:editor@wealthsolutionsreport.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        editor@wealthsolutionsreport.com
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Contact;
