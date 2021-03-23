import { API_URL } from '../apiConstants';

const FETCH_POINTCPS = "FETCH_POINTCPS"

export function fetchPointcps(data){

  return function(dispatch){
    
    fetch(API_URL + "/pointcps")
      .then(res => res.json())
      .then(pcpsObj => {
        dispatch({type: FETCH_POINTCPS, payload: pcpsObj})
      })
    }

}