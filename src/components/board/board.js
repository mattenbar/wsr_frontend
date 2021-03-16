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
        <div className="board-header">
          <h1>Our Board</h1>
        </div>
        <div className="board-container">
          <MattBrown />
          <ChrisPaulitz />
          
          <LisaGok />
          <JeffNash />
          <SidYenamandra />
          <MarryOsaka />
          <HarryGrand />
          <BrendanClark />
          <SusanThedar />
          <CathyWeathorford />
          
        </div>
        <JimRoth />
      </div>
    )
  }
}

export default Board
