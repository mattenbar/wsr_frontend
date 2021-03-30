import React, {Component} from 'react'

class LinksBar extends Component {
  render(){
    return(
      <div className="linksBar-container">
        <div className="linksBar-top">
        
          {/* week one */}

          <a href="/Letters-From-Larry">LETTERS FROM LARRY</a>&nbsp;
          <a href="/Capital-Connections">CAPITAL CONNECTIONS</a>&nbsp;
          <a href="/Point-Counterpoint">POINT-COUNTERPOINT</a> &nbsp;
          <a href="/The-Digital-Domain">THE DIGITAL DOMAIN</a>&nbsp;
          <a href="/Dramatis-Personae">DRAMATIS PERSONAE</a>&nbsp;
          <a href="/Wallet-Share">WALLET SHARE</a>&nbsp;
          {/* statshots will go here */}

          {/* week two */}

          <a href="/NewsMakers-Roundup">NEWSMAKERS ROUNDUP</a>&nbsp;
          <a href="/Bizarre-Industry-Bazaar">BIZARRE INDUSTRY BAZAAR</a>&nbsp;
          <a href="/Investment-Solutions-and-Gatekeepers">INVESTMENT SOLUTIONS & GATEKEEPERS</a>&nbsp;
          <a href="/On-The-Rise">ON THE RISE</a>&nbsp;
          <br/><br/>
          </div>
          <div className="linksBar-bottom">

            {/* week 3 */}

            <a href="/Nightmare-On-Compliance-St">NIGHTMARE ON COMPLIANCE ST</a>&nbsp;
            <a href="/Beltway-And-Beyond">BELTWAY & BEYOND</a>&nbsp;
            <a href="/Buy-It-Or-Build-It">BUY IT OR BUILD IT?</a>&nbsp;

            {/* week 4 */}

            <a href="/Transactions-And-Transitions">TRANSACTIONS & TRANSITIONS</a>&nbsp;
            <a href="/CyberCrypt-Tales">CYBERCRYPT TALES</a>&nbsp;
            <a href="/People-Moves">PEOPLE MOVES</a>&nbsp;
            <a href="/Shout-Outs-And-Put-Downs">SHOUT OUTS & PUT DOWNS</a>&nbsp;
            <a href="/Cast-And-Crew">CAST & CREW</a>&nbsp;
        </div>
      </div>
    )
  }
}

export default LinksBar