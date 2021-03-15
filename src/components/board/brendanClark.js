import React from 'react'
import brendanClarkImage from './images/brendanClark.png'

function brendanClark(props) {
  return (
      <div className="individual">
        <span>
        <img className="individualImage" src={brendanClarkImage} alt="Brendan Clark"/>
          <br/>
          Brendan is Chief Executive Officer of Clark Capital Management Group. As the Firm’s leader in defining and executing its vision and strategy, Brendan is tasked with aligning Clark Capital’s mission with stakeholder needs. He oversees all of the firm’s business lines including custom-tailored strategies for high-net-worth investors, 40 Act products and strategist model delivery, and works to develop and enhance strategic partnerships and opportunities for growth.
          Brendan has been with Clark Capital since 2001, where he has held positions of increasing responsibility including Executive Vice President of Business Development and President. He earned a B.S. in Economics from the University of Delaware and holds the Chartered Financial Analyst:registered: designation. Brendan is a member of the CFA:registered: Institute, the CFA:registered: Society of Philadelphia, and serves on the MMI Board of Governors.
        </span>
      </div>
  );
}

export default brendanClark;