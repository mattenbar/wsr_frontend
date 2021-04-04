import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class linksBarWeekOne extends Component {
  render(){
    return(
      <div className="linksBarWeekOne-container">
          <div className="linksBarWeekOne-links">
          <Link to="/Letters-From-Larry">LETTERS FROM LARRY</Link>&nbsp; | &nbsp;
          <Link to="/Capital-Connections">CAPITAL CONNECTIONS</Link>&nbsp; | &nbsp;
          <Link to="/The-Digital-Domain">THE DIGITAL DOMAIN</Link>&nbsp; | &nbsp;
          <Link to="/Point-Counterpoint">POINT-COUNTERPOINT</Link> &nbsp; | &nbsp;
          <Link to="/Statshots">STATSHOTS</Link>&nbsp; | &nbsp;
          <Link to="/Words-In-Edgewise">WORDS IN EDGEWISE</Link>&nbsp; | &nbsp;
          <Link to="/Wallet-Share">WALLET SHARE</Link>
        </div>
      </div>
    )
  }
}

export default linksBarWeekOne