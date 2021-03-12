import React from 'react'

function contact(props) {
  return (
      <div className="contact_us">
          <h1>CONTACT US</h1>
          <p>
            If you have any questions or concerns or would like to submit a correction or ask for clarification,
            please contact us at <a href="mailto:info@wealthsolutionsreport.com" target="_blank">info@wealthsolutionsreport.com</a>
          </p>
          
          <p className="blackLine"></p>

          <p>
            For submitting opinion or commentary articles or information regarding M&A transactions or new recruitments,
            please contact us at <a href="mailto:editor@wealthsolutionsreport.com" target="_blank">editor@wealthsolutionsreport.com</a>
          </p>
      </div>
  );
}

export default contact;