import React from 'react'
import jeffNashImage from './images/jeffNash.jpg'

function jeffNash(props) {
  return (
      <div className="individual">
        <span>
        <img className="individualImage" src={jeffNashImage} alt="Jeff Nash"/>
          <br/>
          As CEO of BridgeMark Strategies, Jeff leverages his 25+ years of industry experience and over 20 years of experience coaching and consulting with financial advisors to help them navigate major transition decisions such as Broker/Dealer changes and succession planning.  Areas of expertise include:
            <ul>
              <li>Broker/Dealer or RIA evaluation</li>
              <li>Succession planning and selling practices</li>
              <li>Strategic consulting on recruiting growth strategies</li>
            </ul>
          For the past six years, Jeff has researched approximately 150 different firms and has selling agreements with nearly 100 of these firms to be able to introduce and represent them to financial advisors. His consultative approach has helped advisors to select as many as 40 different affiliation solutions.  In his career Jeff has worked with hundreds of advisors, more recently with Bridgemark Strategies, Jeff has helped scores of advisors representing billions of of dollars in assets transition their business.
          For the first 6 years of his career, Jeff was a financial advisor and licensed principal. Jeff spent 14 years at LPL financial in various leadership roles that included SVP Business Business Development where he was responsible for recruiting and SVP Business Consulting where he was responsible for building out and providing coaching services to LPL’s top advisors.  After leaving LPL, Jeff consulted with Ameriprise Financial on various recruiting and growth initiatives. Jeff earned a Bachelors degree from Colby College in Waterville, Me.  He then earned his MBA from Bentley University in Waltham, MA.  Jeff lives in Charlotte, NC with his wife and 3 kids and in his spare time enjoys golfing, tennis and fishing.
        </span>
      </div>
  );
}

export default jeffNash;