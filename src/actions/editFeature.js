import { API_URL } from "../apiConstants";

export const EDIT_FEATURE = "EDIT_FEATURE"

export const editFeature = (data) => {
  return (dispatch) => {
    fetch(API_URL + `/features/${data.id}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(feature => {
        if (feature.success) {
            alert(feature.success);
            dispatch({ type: EDIT_FEATURE, payload: feature });
        } else if (feature.errors) {
            alert(feature.errors.map((error) => error));
        }
    })
}

}