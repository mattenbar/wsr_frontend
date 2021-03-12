import React, {Component} from 'react';

//import board members
import MattBrown from './mattBrown'
import BrendanClark from './brendanClark'

class Board extends Component{
  render(){
    return(
      <div className="board-container">
        <MattBrown />
        <BrendanClark />
      </div>
    )
  }
}

export default Board