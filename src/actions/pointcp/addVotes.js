import { API_URL } from '../../apiConstants';

export const voteArticleOne = (pointcpData) => (dispatch) => {
    console.log("$$$", pointcpData)

    // fetch(API_URL + `/pointcps/${pointcpData.id}`, {
        // method: "PUT",

    fetch(API_URL + `/pointcpvotes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(pointcpData)
    })
    .then(res => res.json())
    .then(pointcpObj => {
        console.log("pointcpObj", pointcpObj)
    })
}

export const voteArticleTwo = (pointcpData2) => (dispatch) => {
    console.log("///", pointcpData2)

    // fetch(API_URL + `/pointcps/${pointcpData2.id}`, {
    //     method: "PUT",
    fetch(API_URL + `/pointcpvotes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(pointcpData2)
    })
    .then(res => res.json())
    .then(pointcpObj2 => {
        console.log("pointcpObj2", pointcpObj2)
    })
}