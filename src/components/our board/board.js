import React, {Component} from 'react';

//import board members
import MattBrown from './mattBrown'

class Board extends Component{
  render(){
    return(
      <div className="board-container">
        <MattBrown />
      </div>
    )
  }
}

export default Board