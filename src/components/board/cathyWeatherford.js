import React from 'react'
import cathyWeatherfordImage from './images/cathyWeatherford.jpg'

function cathyWeatherford(props) {
  return (
      <div className="individual">
        <span>
        <img className="individualImage" src={cathyWeatherfordImage} alt="Cathy Weathorford"/>
          <br/>
          Catherine Weatherford is a veteran of financial services regulation, public policy, technology and product strategy, having served more than 40 years in both public and private sector roles. She began her career in government with the Oklahoma Insurance Department, becoming the state’s first female Insurance Commissioner. She was the longest-serving CEO of the National Association of Insurance Commissioners before heading the Insured Retirement Institute in Washington, D.C. during 2008-2018. She is a champion of better consumer education, retirement and proactive aging, recognized by NBC’s “Today” program and a keynote speaker for World Elder Abuse Day at the White House. She was named by Investment News as a “Woman to Watch” in 2016.
          Cathy will advise Cogniscient’s engagement with policymakers and regulators, as well as financial service companies seeking to improve policies, procedures and products for aging investors and their families.
        </span>
      </div>
  );
}

export default cathyWeatherford;