import { combineReducers } from 'redux'
import postReducer from './postReducer'
import categoryReducer from './categoryReducer'
import searchReducer from './searchReducer'
import featuresReducer from './featuresReducer'
import userReducer from './userReducer';
import pointcpReducer from './pointcpReducer'
import adsReducer from './adsReducer'
import showadsReducer from './showadsReducer'
import statshotsReducer from './statshotReducer'


export default combineReducers({
  posts: postReducer,
  categories: categoryReducer,
  search: searchReducer,
  features: featuresReducer,
  user: userReducer,
  pcps: pointcpReducer,
  ads: adsReducer,
  showads: showadsReducer,
  statshots: statshotsReducer,
})