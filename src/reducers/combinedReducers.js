import { combineReducers } from 'redux'
import postReducer from './postReducer'
import categoryReducer from './categoryReducer'
import searchReducer from './searchReducer'


export default combineReducers({
  posts: postReducer,
  categories: categoryReducer,
  search: searchReducer
})