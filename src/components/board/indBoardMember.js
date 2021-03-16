import React from 'react';
import PopUpBoard from './popUpBoard'

function indBoardMember(props) {
    return (
        <div className="individual" key={props.key}>
            <span>
                <img className="individualImage" src={props.img} alt={props.name}/>
                <h1>{props.name}</h1>
                <p>{props.about}</p>
            </span>
            <div className="seemoreboard" >
            <button className="auth-buttons__yellow"><a href="#popupboard">Learn More</a></button>
            </div>
            <PopUpBoard name={props.name} title={props.title} about={props.about} />
        </div>
    );
}

export default indBoardMember;