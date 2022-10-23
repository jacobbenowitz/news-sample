import {
  RECEIVE_NEWS
} from '../actions/news_actions';

import { merge } from 'lodash'

const IDLE = 'IDLE';
const DONE = 'DONE';

const initialState = {
  articles: [],
  status: IDLE
};

const newsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_NEWS:
      nextState.articles = action.news.data.articles;
      nextState.status = DONE;
      return nextState;
    default:
      return state;
  }
}

export default newsReducer;