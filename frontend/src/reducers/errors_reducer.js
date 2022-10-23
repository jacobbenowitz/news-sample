import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import newsErrorReducer from './news_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  news: newsErrorReducer,
})

export default errorsReducer;