import React, {Component} from 'react';

//import board members
import MattBrown from './mattBrown'
import BrendanClark from './brendanClark'
import LisaGok from './lisaGok'
import HarryGrand from './harryGrand'
import JeffNash from './jeffNash'
import MarryOsaka from './marryOsaka'
import ChrisPaulitz from './chrisPaulitz'
import JimRoth from './jimRoth'
import SusanThedar from './susanThedar'
import CathyWeathorford from './cathyWeatherford'
import SidYenamandra from './sidYenamandra'

class Board extends Component{
  render(){
    return(
      <div className="board">
        <div className="borad-header">
          <h1>Our Board</h1>
        </div>
        <div className="board-container">
          <MattBrown />
          <BrendanClark />
          <LisaGok />
          <HarryGrand />
          <JeffNash />
          <MarryOsaka />
          <ChrisPaulitz />
          <JimRoth />
          <SusanThedar />
          <CathyWeathorford />
          <SidYenamandra />
        </div>
      </div>
    )
  }
}

export default Board