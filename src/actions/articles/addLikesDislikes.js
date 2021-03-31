import { API_URL } from '../../apiConstants';

export const addLikesDislikes = (postVoteData) => (dispatch) => {
    console.log("$$$", postVoteData)
    // debugger

    fetch(API_URL + `/postvotes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(postVoteData)
    })
    .then(res => res.json())
    .then(postVoteObj => {
        // debugger
        console.log("postVoteObj", postVoteObj)
    })
}