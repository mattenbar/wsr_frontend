import React from 'react'
import mattImage from './images/mattBrown.png'

function mattBrown(props) {
  return (
      <div className="individual">
        <span>
        <img className="individualImage" src={mattImage} alt="Matt Brown "/>
          <p>
          Matt is the Founder and CEO of CAIS and has spent over 30 years in wealth management, alternative investments, and platform management. Matt began his career as a financial advisor at Shearson Lehman Brothers and Smith Barney. Following, Matt founded the alternative investment platforms Brown Simpson Asset Management, Brownstone Advisors, and the Antara platform at FGG. 
          Matt strongly believes that entrepreneurship is the major driver of economic and social change, and actively mentors entrepreneurs across all industries. Additionally, Matt is a regular contributor to the Forbes Technology Council discussing the latest innovations and new technologies. Matt received his BA from St. Mary’s College and holds FINRA Series 24, 7, and 63 licenses.
          </p>
        </span>
      </div>
  );
}

export default mattBrown;