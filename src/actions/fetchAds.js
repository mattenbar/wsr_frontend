import { API_URL } from '../apiConstants';

const FETCH_ADS = "FETCH_ADS"

export function fetchAds(data){

  return function(dispatch){
    
    fetch(API_URL + '/ads')
      .then(res => res.json())
      .then(adsObj => {
        dispatch({type: FETCH_ADS, payload: adsObj})
      })
    }

}