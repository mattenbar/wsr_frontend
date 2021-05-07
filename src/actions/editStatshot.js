import { API_URL } from "../apiConstants";

export const EDIT_STATSHOT = "EDIT_STATSHOT";

export const editStatshot = (data, statshot_id) => {
   
  if (data.image["name"] !== undefined) {
    // debugger
    return (dispatch) => {
      let body = new FormData();
      body.append("image", data.image);
      fetch(API_URL + "/image_upload", {
        method: "PUT",
        body,
      })
        .then((resp) => resp.json())
        .then((json) => {
            // debugger
          data.image = json.image;
          fetch(API_URL + `/statshots/${data.id}`, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            method: "PUT",
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((statshot) => {
              if (statshot.success) {
                alert(statshot.success);
                dispatch({ type: EDIT_STATSHOT, payload: statshot });
              } else if (statshot.errors) {
                alert(statshot.errors.map((error) => error));
              }
            });
        });
    };
  } else if (data.image["name"] === undefined) {
    // debugger
    return (dispatch) => {
      fetch(API_URL + `/statshots/${data.id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "PUT",
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((statshot) => {
          if (statshot.success) {
            alert(statshot.success);
            dispatch({ type: EDIT_STATSHOT, payload: statshot });
          } else if (statshot.errors) {
            alert(statshot.errors.map((error) => error));
          }
        });
    };
  }
};
