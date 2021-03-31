import { API_URL } from '../../apiConstants';

export const VOTE_ARTICLE_ONE = "VOTE_ARTICLE_ONE"
export const VOTE_ARTICLE_TWO = "VOTE_ARTICLE_TWO"

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

// export const addVotes1 = (pointcpData) => (dispatch) => {
    
//     fetch(API_URL + `/pointcps$`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify(pointcpData)
//     })

//     .then(res => res.json())
//     .then(pointcpObj => {
//         if (pointcpObj.pointcp !== undefined) {
//             return dispatch({ type: GET_POINTCP_SUCCESS, payload: pointcpObj })
//         } else {
//             debugger
//             alert(pointcpObj.errors.map(error => error))
//             return dispatch({ type: GET_POINTCP_ERRORS, payload: pointcpObj })
//         }
//     })
//     .catch(err => {
//         alert("Unable To Veryify User At This Time")
//         return dispatch({ type: GET_POINTCP_FAILURE, payload: err })
//     })


//     fetch(`http://localhost:3000/jobs/${data.id}`, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             body: JSON.stringify(data)
//         })
//         .then(resp => resp.json())
//         .then(jobObj => dispatch({type: EDIT_JOB, payload: jobObj}))
// }