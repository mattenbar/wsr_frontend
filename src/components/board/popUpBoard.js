import React from 'react';

function popUpBoard(props) {
    return (
        <div className="popup" id={props.name}> 
            <div className="popup__content">
                <div className="boardpopup__left">

                </div>
                <div className="boardpopup__right" >
                <a href="#" className="popup__close">&times;</a>
                    <div>
                        <h1>{props.name}</h1>
                        <h2>{props.title}</h2>
                        <p>{props.about}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default popUpBoard;



        
        
