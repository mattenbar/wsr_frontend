import React from 'react';

function popUp(props) {
    return (
        <div className="popup" id="popup"> 
            <div className="popup__content">
                <div className="popup__left">

                </div>
                <div className="popup__right" >
                    <a href="#" className="popup__close">&times;</a>
                    <h2 className="heading-secondary" >Sign UP</h2>
                    <h3 className="heading-tertiary">This should be a LogIn Link</h3>
                </div>
            </div>
        </div>
    );
}

export default popUp;