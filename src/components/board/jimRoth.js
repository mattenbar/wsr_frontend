import React from 'react'
import jimRothImage from './images/jimRoth.jpg'

function jimRoth(props) {
  return (
      <div className="individual">
        <span>
        <img className="individualImage" src={jimRothImage}  alt="Jim Roth"/>
          <p>
          Jim Roth is a highly-regarded financial services executive with over 35 years of experience in sales, operations, and correspondent-related services. A former financial advisor, Jim knows the obstacles his clients face, and provides customized solutions to help institutions, broker-dealers and advisors expand services, manage complex data and mitigate regulatory risks. 
          He recently led Pershing’s Relationship Management of BNY Mellon’s largest, most strategic clients worldwide. He was also responsible for assisting Pershing’s clients in attracting advisors and advisors in transition. With a comprehensive view and deep understanding of the trends and direction of the financial services landscape, he develops targeted strategies to grow business, assets and revenues.
          </p>
        </span>
      </div>
  );
}

export default jimRoth;