import React, { useState } from "react";
import { Button, Card, Col, Row, Popover, Drawer } from "antd";
import {
  ArrowRightOutlined
} from '@ant-design/icons';
import moment from 'moment';

const NewsCard = ({ article, mobile }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const drawerItem = (
    <Drawer
      title={`${article.source.name}`}
      placement="right"
      onClose={onClose}
      open={open}
      width={mobile ? "90vw" : "70vw"}
    >
      <h3 className="text-black">{article.title}</h3>
      <div className="flex flex-col gap-2 pb-5">
        <p className="text-black pb-2">{moment(article.publishedAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        <p className="text-black">{article.author}</p>
        <span className="text-black pt-6 text-lg">
          {article.description}
        </span>
      </div>
      <Button type="primary" size="large" href={article.url} target="_blank">View Article</Button>
    </Drawer>
  )

  return (
    <>
      <Card
        hoverable={true}
        cover={<img alt={`${article.title}`} src={`${article.urlToImage}`} />}
        onClick={showDrawer}
      >
        <p className="pb-3" style={{ fontWeight: 700, opacity: 0.7 }}>{article.source.name}</p>
        <p style={{ fontSize: 22, color: 'black' }}>{article.title.split("-")[0].trim()}</p>
        <div className="flex flex-row justify-end w-100 pt-3">
          <Button type="text" size="small" onClick={showDrawer} className="mt-2">
            <div className="flex flex-row justify-center items-center gap-2">
              Read More <ArrowRightOutlined />
            </div>
          </Button>
        </div>
      </Card>
      {drawerItem}
    </>

  )
}

export default NewsCard;