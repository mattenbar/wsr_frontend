import React from 'react'
import susanThedarImage from './images/susanThedar.png'

function susanThedar(props) {
  return (
      <div className="individual">
        <span>
        <img className="individualImage" src={susanThedarImage}  alt="Susan Thedar"/>
          <br/>
          Susan Theder is Chief Marketing Officer at Advisor Group, one of the nation’s largest networks of independent financial advisors, overseeing more than $228 billion in client assets under administration. As CMO, Susan develops ways to enhance the effectiveness of the Firm’s communications and drive awareness of all our platform has to offer.
          She also focuses on developing programs to support our advisors’ growth objectives. Susan has spent over 25 years in financial services, most recently as Chief Marketing Officer at Cetera Financial Group, overseeing marketing and communications for its 11 independently managed broker-dealers.
        </span>
      </div>
  );
}

export default susanThedar;