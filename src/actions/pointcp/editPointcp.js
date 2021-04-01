import { API_URL } from '../../apiConstants';

export const EDIT_POINTCP = "EDIT_POINTCP"

export const editPointcp = (pointcpData) => {
    // debugger
    if (pointcpData.imageOne["name"] !== undefined && pointcpData.imageTwo["name"] !== undefined) {
        return (dispatch) => {
            let body = new FormData();
            body.append("imageOne", pointcpData.imageOne);
            body.append("imageTwo", pointcpData.imageTwo);
            fetch(API_URL + "/image_upload_pointcp", {
                method: "PUT",
                body,
            })
                .then((resp) => resp.json())
                .then((json) => {
                    // debugger
                    pointcpData.imageOne = json.imageOne;
                    pointcpData.imageTwo = json.imageTwo;
                    fetch(API_URL + `/pointcps/${pointcpData.id}`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json",
                        },
                        method: "PUT",
                        body: JSON.stringify(pointcpData),
                    })
                    .then(res => res.json())
                    .then(pointcp => {
                        // debugger
                        if (pointcp.success) {
                            alert(pointcp.success);
                            dispatch({ type: EDIT_POINTCP, payload: pointcp });
                        } else if (pointcp.error) {
                            alert(pointcp.error);
                        }
                    })
                });
        }
    } else if (pointcpData.imageOne["name"] !== undefined && pointcpData.imageTwo["name"] === undefined) {
        return (dispatch) => {
            let body = new FormData();
            body.append("imageOne", pointcpData.imageOne);
            fetch(API_URL + "/image_upload_pointcp", {
                method: "PUT",
                body,
            })
                .then((resp) => resp.json())
                .then((json) => {
                    pointcpData.imageOne = json.imageOne;
                    fetch(API_URL + `/pointcps/${pointcpData.id}`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json",
                        },
                        method: "PUT",
                        body: JSON.stringify(pointcpData),
                    })
                    .then(res => res.json())
                    .then(pointcp => {
                        // debugger
                        if (pointcp.success) {
                            alert(pointcp.success);
                            dispatch({ type: EDIT_POINTCP, payload: pointcp });
                        } else if (pointcp.error) {
                            alert(pointcp.error);
                        }
                    })
                });
        }
    } else if (pointcpData.imageOne["name"] === undefined && pointcpData.imageTwo["name"] !== undefined) {
        return (dispatch) => {
            let body = new FormData();
            body.append("imageTwo", pointcpData.imageTwo);
            fetch(API_URL + "/image_upload_pointcp", {
                method: "PUT",
                body,
            })
                .then((resp) => resp.json())
                .then((json) => {
                    pointcpData.imageTwo = json.imageTwo;
                    fetch(API_URL + `/pointcps/${pointcpData.id}`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json",
                        },
                        method: "PUT",
                        body: JSON.stringify(pointcpData),
                    })
                    .then(res => res.json())
                    .then(pointcp => {
                        // debugger
                        if (pointcp.success) {
                            alert(pointcp.success);
                            dispatch({ type: EDIT_POINTCP, payload: pointcp });
                        } else if (pointcp.error) {
                            alert(pointcp.error);
                        }
                    })
                });
        }
    } else if (pointcpData.imageOne["name"] === undefined && pointcpData.imageTwo["name"] === undefined) {
        return (dispatch) => {
            fetch(API_URL + `/pointcps/${pointcpData.id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                method: "PUT",
                body: JSON.stringify(pointcpData),
            })
            .then(res => res.json())
            .then(pointcp => {
                if (pointcp.success) {
                    alert(pointcp.success);
                    dispatch({ type: EDIT_POINTCP, payload: pointcp });
                } else if (pointcp.error) {
                    alert(pointcp.error);
                }
            })
        }
    }
};