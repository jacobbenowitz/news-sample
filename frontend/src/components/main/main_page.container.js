import { connect } from "react-redux";
import { fetchNews } from "../../actions/news_actions";
import MainPage from "./main_page";

const mapStateToProps = (state) => {
  return {
    errors: state.newsErrors,
    articles: state.news.articles,
    status: state.news.status,
    currentUser: state.session.user
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNews: () => dispatch(fetchNews())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);