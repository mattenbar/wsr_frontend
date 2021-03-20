import { API_URL } from '../apiConstants';

const FETCH_FEATURES = "FETCH_FEATURES"

export function fetchFeatures(data){

  return function(dispatch){
    
    fetch(API_URL + "/features")
      .then(res => res.json())
      .then(featuresObj => {
        
        dispatch({type: FETCH_FEATURES, payload: featuresObj})
      })
    }

}