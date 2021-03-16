import { combineReducers } from 'redux'
import postReducer from './postReducer'
import categoryReducer from './categoryReducer'


export default combineReducers({
  posts: postReducer,
  categories: categoryReducer
})