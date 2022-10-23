import { combineReducers } from 'redux'
import session from './session_reducer'
import errorsReducer from './errors_reducer';
import newsReducer from './news_reducer';

const rootReducer = combineReducers({
  news: newsReducer,
  errors: errorsReducer,
  session: session,
})

export default rootReducer;