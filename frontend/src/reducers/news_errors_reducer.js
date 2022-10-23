import {
  RECEIVE_NEWS_ERRORS,
} from '../actions/news_actions';
import { merge } from 'lodash';

const newsErrorReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState = merge([], state);

  switch (action.type) {
    case RECEIVE_NEWS_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default newsErrorReducer;