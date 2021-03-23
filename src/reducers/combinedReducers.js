import { combineReducers } from 'redux'
import postReducer from './postReducer'
import categoryReducer from './categoryReducer'
import searchReducer from './searchReducer'
import featuresReducer from './featuresReducer'
import userReducer from './userReducer';
import pointcpReducer from './pointcpReducer'


export default combineReducers({
  posts: postReducer,
  categories: categoryReducer,
  search: searchReducer,
  features: featuresReducer,
  user: userReducer,
  pcps: pointcpReducer
})