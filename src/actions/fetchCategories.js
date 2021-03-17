import { API_URL } from '../apiConstants';

const FETCH_CATEGORIES = "FETCH_CATEGORIES"

export function fetchCategories(data){

  return function(dispatch){
    
    fetch(API_URL + "/categories")
      .then(res => res.json())
      .then(categoriesObj => {
        dispatch({type: FETCH_CATEGORIES, payload: categoriesObj})
      })
    }

}