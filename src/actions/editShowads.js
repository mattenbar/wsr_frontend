import { API_URL } from "../apiConstants";

export const EDIT_SHOWADS = "EDIT_SHOWADS"

export const editShowads = (data) => {
  return (dispatch) => {
    fetch(API_URL + `/showads/${data.id}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(showad => {
        if (showad.success) {
            alert(showad.success);
            dispatch({ type: EDIT_SHOWADS, payload: showad });
        } else if (showad.errors) {
            alert(showad.errors.map((error) => error));
        }
    })
}

}