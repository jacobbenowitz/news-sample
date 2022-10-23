import React from "react";
import { useEffect } from "react";
import { Button, Row } from "antd";
import NewsCard from "./news-card";

const MainPage = ({ articles, status, errors, currentUser, fetchNews }) => {
  useEffect(() => {
    if (status === "IDLE") {
      fetchNews()
    }
  }, [status])

  let allArticles;
  if (status === "DONE") {
    allArticles = articles.map((article, idx) =>
      <NewsCard article={article} key={`article-${idx}`} />
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