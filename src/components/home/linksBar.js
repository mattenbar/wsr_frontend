import React, {Component} from 'react'

class LinksBar extends Component {
  render(){
    return(
      <div className="linksBar-container">
        <div className="linksBar-top">
            <a href="/point-counterpoint">POINT-COUNTERPOINT</a> &nbsp;
            <a href="/capital-connections">CAPITAL CONNECTIONS</a>&nbsp;
            <a href="/digital-domains">DIGITAL DOMAINS</a>&nbsp;
            <a href="/shout-out-and-put-downs">SHOUT OUTS & PUT DOWNS</a>&nbsp;
            <a href="/beltway-and-beyond">BELTWAY AND BEYOND</a>&nbsp;
            <a href="/lawyer-land">LAWYER LAND</a>&nbsp;
            <a href="/nightmare-on-compliance-st">NIGHTMARE ON COMPLIANCE ST</a>&nbsp;
            <br/><br/>
          </div>
          <div className="linksBar-bottom">
            <a href="/buy-it-or-build-it">BUY IT OR BUILD IT?</a>&nbsp;
            <a href="/wallet-share">WALLET SHARE</a>&nbsp;
            <a href="/family-feuds">FAMILY FEUDS</a>&nbsp;
            <a href="/product-strategies">PRODUCT STRATEGIES</a>&nbsp;
            <a href="/letters-from-larry">LETTERS FROM LARRY</a>&nbsp;
            <a href="/noteworthy-notes">NOTEWORTHY NOTES</a>&nbsp;
            <a href="/newsmakers-roundup">NEWSMAKERS ROUNDUP</a>&nbsp;
            <a href="/transactions-and-transitions">TRANSACTIONS AND TRANSITIONS</a>&nbsp;
            <a href="/from-our-partners">FROM OUR PARTNERS</a>
        </div>
      </div>
    )
  }
}

export default LinksBar