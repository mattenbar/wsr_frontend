import React, {Component} from 'react';

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
        </div>
      </div>
    )
  }
}

export default Board
