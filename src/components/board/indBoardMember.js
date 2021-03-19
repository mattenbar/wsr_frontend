import React from 'react';
import PopUpBoard from './popUpBoard'

function indBoardMember(props) {
    // href link fragment identifier (#)

    // const boardName = props.name
    return (
        // console.log(props),
        <div className="individual" >
            <span>
                <img className="individualImage" src={props.img} alt={props.name}/>
                <h1 className="boardname" >{props.name}</h1>
                <br />
                <h3>{props.title}</h3>
                <div className="seemoreboard" >
            <button className="popupbuttonboard"><a href={`#${props.name}`}>Learn More</a></button>
                <PopUpBoard name={props.name} title={props.title} about={props.about}/>
            </div>
            </span>
            
        </div>
    );
}

export default indBoardMember;