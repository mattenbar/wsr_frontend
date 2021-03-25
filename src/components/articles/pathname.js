import React from 'react';

function Pathname(props) {
    

    if (props.category === 1){
        debugger
        return (
            <>
                `/Todays-Top-Features/${props.leftFeature["id"]}`
            </>
    )};
}

export default Pathname;