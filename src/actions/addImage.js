import { API_URL } from "../apiConstants";

export const addImage = (body) => {
    debugger
    return (dispatch) => {
        // debugger

        fetch(API_URL + "/image_upload", {
            method: "PUT",
            body
        })
            .then((response) => response.json())
            .then((post) => {
                debugger
                console.log("post", post)
                // dispatch({ type: "ADD_IMAGE", payload: post })
            }
            );
    };
};
