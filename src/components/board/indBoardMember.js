import React from 'react';

function indBoardMember(props) {
    return (
        <div className="individual" key={props.key}>
            <span>
                
            <img className="individualImage" src={props.img} alt={props.name}/>
                <h1>{props.name}</h1>
                <p>{props.about}</p>
            </span>
        </div>
    );
}

export default indBoardMember;