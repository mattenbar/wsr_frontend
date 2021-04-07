import { API_URL } from '../../apiConstants';

export const addLikesDislikes = (postVoteData) => (dispatch) => {

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
        if (postVoteObj.failure) {
            alert(postVoteObj.failure)
        }
        
        if (postVoteObj.success) {
            
            alert("Thank you for voting.")
        } 
        
    })
}