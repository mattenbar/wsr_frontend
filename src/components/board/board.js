import React, {Component} from 'react';

//import board members
// import MattBrown from './mattBrown'
// import BrendanClark from './brendanClark'
// import LisaGok from './lisaGok'
// import HarryGrand from './harryGrand'
// import JeffNash from './jeffNash'
// import MaryOsaka from './maryOsaka'
// import ChrisPaulitz from './chrisPaulitz'
// import JimRoth from './jimRoth'
// import SusanThedar from './susanThedar'
// import CathyWeathorford from './cathyWeatherford'
// import SidYenamandra from './sidYenamandra'

import { boardMembers } from './boardMembers';
import IndBoardMember from './indBoardMember';

class Board extends Component{

boardMembersMapped = () => {
  return boardMembers.map( member => <IndBoardMember
    key={member.key}
    name={member.name}
    title={member.title}
    about={member.about}
    img={member.img}
  />)
}

  render(){
    return(
      <div className="board">
        <div className="board-header">
          <h1>Our Board</h1>
        </div>
        <div className="board-container">
          {this.boardMembersMapped()}

          {/* <MattBrown />
          <ChrisPaulitz />
          <LisaGok />
          <JeffNash />
          <SidYenamandra />
          <MaryOsaka />
          <HarryGrand />
          <BrendanClark />
          <SusanThedar />
          <CathyWeathorford />
          <JimRoth /> */}
        </div>
      </div>
    )
  }
}

export default Board
