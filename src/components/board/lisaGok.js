import React from 'react'
import lisaGokImage from './images/lisaGok.jpg'

function lisaGok(props) {
  return (
      <div className="individual">
        <span>
        <img className="individualImage" src={lisaGokImage}  alt="Lisa Gok"/>
          <p>
          Lisa Gok is general counsel at Cetera where she serves as the chief legal officer and principal legal advisor to Cetera. and its Board of Directors. In this role, Lisa is responsible for ensuring a holistic legal view for Cetera, ensuring best practices while operating as a strong strategic partner for Cetera on a broad range of legal, operational and corporate activities.  She leads a team of lawyers and other legal professionals who provide counsel on a wide variety of general corporate matters and manage litigation and regulatory enforcement for the firms.
          Prior to joining Cetera in 2012, Lisa held a variety of leadership positions both in and outside of financial services. She spent time with the Justice Department and 15 years with the U.S. Securities and Exchange Commission, both headquarters in Washington, D.C. and Los Angeles, California. Lisa also served as an assistant United States attorney in the Criminal Division of the U.S. Attorney’s Office in the District of Columbia where Lisa tried more than 20 jury trials and conducted more than 1,000 hearings. Additionally, she served as chief compliance officer at Transamerica Financial Advisors, a broker dealer and registered investment advisor and was part of the legal team that handled the IPO for Green Dot Corporation a financial technology firm and bank holding company.
          Lisa is a graduate of Princeton University’s School of Public and International Affairs and earned her J.D. from Columbia University School of Law School.  She is admitted to practice law in Washington D.C. and California.
          </p>
        </span>
      </div>
  );
}

export default lisaGok;