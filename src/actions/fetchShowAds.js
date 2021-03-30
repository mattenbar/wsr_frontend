import { API_URL } from '../apiConstants';

const FETCH_SHOWADS = "FETCH_SHOWADS"

export function fetchShowads(data){

  return function(dispatch){
    
    fetch(API_URL + '/showads')
      .then(res => res.json())
      .then(showadsObj => {
        dispatch({type: FETCH_SHOWADS, payload: showadsObj})
      })
    }

}