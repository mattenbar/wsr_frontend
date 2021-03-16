const FETCH_CATEGORIES = "FETCH_CATEGORIES"

export function fetchCategories(data){

  return function(dispatch){
    
    fetch("http://localhost:3000/api/v1/categories")
      .then(res => res.json())
      .then(categoriesObj => {
        dispatch({type: FETCH_CATEGORIES, payload: categoriesObj})
      })
    }

}