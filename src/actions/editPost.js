import { API_URL } from "../apiConstants";

export const EDIT_POST = "EDIT_POST";

export const editPost = (data, post_id) => {
  if (data.image["name"] !== undefined) {
    return (dispatch) => {
      let body = new FormData();
      body.append("image", data.image);
      fetch(API_URL + "/image_upload", {
        method: "PUT",
        body,
      })
        .then((resp) => resp.json())
        .then((json) => {
          data.image = json.image;
          fetch(API_URL + `/posts/${post_id}`, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            method: "PUT",
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((post) => {
              if (post.success) {
                alert(post.success);
                dispatch({ type: EDIT_POST, payload: post });
              } else if (post.errors) {
                alert(post.errors.map((error) => error));
              }
            });
        });
    };
  } else if (data.image["name"] === undefined) {
    return (dispatch) => {
      fetch(API_URL + `/posts/${post_id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "PUT",
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((post) => {
          if (post.success) {
            alert(post.success);
            dispatch({ type: EDIT_POST, payload: post });
          } else if (post.errors) {
            alert(post.errors.map((error) => error));
          }
        });
    };
  }
};
