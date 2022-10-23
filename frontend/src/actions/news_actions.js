import * as NewsApi from "../util/news_api_util";

export const RECEIVE_NEWS = "RECEIVE_NEWS";
export const RECEIVE_NEWS_ERRORS = "RECEIVE_NEWS_ERRORS";

const receiveNews = news => ({
  type: RECEIVE_NEWS,
  news
});

const receiveNewsErrors = error => ({
  type: RECEIVE_NEWS_ERRORS,
  error
});


// thunks

export const fetchNews = () => dispatch => {
  return NewsApi.getNews().then(news => {
    console.log("news", news);
    dispatch(receiveNews(news))
  })
    .catch(err => dispatch(
      receiveNewsErrors(err.response.data)
    ));
}