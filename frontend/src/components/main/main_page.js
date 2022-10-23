import React from "react";
import { useEffect } from "react";
import { Button, Row, Col } from "antd";
import NewsCard from "./news-card";
import { isMobile } from "../../util/window_util";

const MainPage = ({ articles, status, errors, currentUser, fetchNews }) => {
  useEffect(() => {
    if (status === "IDLE") {
      fetchNews()
    }
  }, [status])

  const mobile = isMobile();
  // console.log('isMobile', mobile)
  // const device = 
  // console.log('navigator', window.navigator)

  let allArticles;
  if (status === "DONE") {
    allArticles = articles.map((article, idx) =>
      <Col span={mobile ? 100 : 8} className="pb-4" key={`article-${idx}`}>
        <NewsCard article={article} mobile={mobile} />
      </Col>
    )
  } else {
    allArticles = (
      <div>No articles found</div>
    )
  }

  return (
    <div className="flex flex-col w-screen px-8">
      <h2>Today's Top Business News</h2>
      <div className="pb-7 flex flex-row justify-end items-center">
        <Button
          type="primary"
          onClick={fetchNews}
        >
          Refresh News
        </Button>
      </div>
      <div className="flex flex-col w-100">
        <Row gutter={16}>
          {allArticles}
        </Row>
      </div>
    </div>
  )
}

export default MainPage;