import React from 'react';
import PopUpBoard from './popUpBoard'

function indBoardMember(props) {
    return (
        <div className="individual" key={props.key}>
            <span>
                <img className="individualImage" src={props.img} alt={props.name}/>
                <h1>{props.name}</h1>
                <br />
                <h3>{props.title}</h3>
            </span>
            <div className="seemoreboard" >
            <button className="popupbuttonboard"><a href="#popupboard">Learn More</a></button>
                <PopUpBoard name={props.name} title={props.title} about={props.about} key={props.key}/>
            </div>
            
        </div>
    );
}

export default indBoardMember;