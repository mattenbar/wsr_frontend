import React, {Component} from 'react'
import { Link } from "react-router-dom";

class LinksBar extends Component {
  render(){
    return(
      <div className="linksBar-container">
        <div className="linksBar-links">
          <div className="linksBar-Top">
            <Link to="/Letters-From-Larry">LETTERS FROM LARRY</Link>&nbsp; | &nbsp;
            <Link to="/Beltway-And-Beyond">BELTWAY & BEYOND</Link>&nbsp; | &nbsp;
            <Link to="/Bizarre-Industry-Bazaar">BIZARRE INDUSTRY BAZAAR</Link>&nbsp; | &nbsp;
            <Link to="/Buy-It-Or-Build-It">BUY IT OR BUILD IT?</Link>&nbsp; | &nbsp;
            <Link to="/Capital-Connections">CAPITAL CONNECTIONS</Link>&nbsp; | &nbsp;
            <Link to="/CyberCrypt-Tales">CYBERCRYPT TALES</Link>&nbsp; | &nbsp;
            <Link to="/The-Digital-Domain">THE DIGITAL DOMAIN</Link>&nbsp; | &nbsp;
            <Link to="/Dramatis-Personae">DRAMATIS PERSONAE</Link>

          </div>
          <div className="linksBar-Middle">
            <Link to="/Health-And-Wealth">HEALTH & WEALTH</Link>&nbsp; | &nbsp;
            <Link to="/Investment-Solutions-and-Gatekeepers">INVESTMENT SOLUTIONS & GATEKEEPERS</Link>&nbsp; | &nbsp;
            <Link to="/NewsMakers-Roundup">NEWSMAKERS ROUNDUP</Link>&nbsp; | &nbsp;
            <Link to="/On-The-Rise">ON THE RISE</Link>&nbsp; | &nbsp;
            <Link to="/Nightmare-On-Compliance-St">NIGHTMARE ON COMPLIANCE ST</Link>&nbsp; | &nbsp;
            <Link to="/Noteworthy-Notes">NOTEWORTHY NOTES</Link>&nbsp; | &nbsp;
            <Link to="/People-Moves">PEOPLE MOVES</Link>
            
          </div>
          <div className="linksBar-Bottom">
            <Link to="/Point-Counterpoint">POINT-COUNTERPOINT</Link> &nbsp; | &nbsp;
            <Link to="/Statshots">STATSHOTS</Link> &nbsp; | &nbsp;
            <Link to="/Shout-Outs-And-Put-Downs">SHOUT OUTS & PUT DOWNS</Link>&nbsp; | &nbsp;
            <Link to="/Transactions-And-Transitions">TRANSACTIONS & TRANSITIONS</Link>&nbsp; | &nbsp;
            <Link to="/Upmarket">UPMARKET</Link>&nbsp; | &nbsp;
            <Link to="/Wallet-Share">WALLET SHARE</Link>&nbsp; | &nbsp;
            <Link to="/Words-In-Edgewise">WORDS IN EDGEWISE</Link>&nbsp; | &nbsp;
            <Link to="/Cast-And-Crew">CAST & CREW</Link>
          </div>
          
          
          
        </div>
      </div>
    )
  }
}

export default LinksBar