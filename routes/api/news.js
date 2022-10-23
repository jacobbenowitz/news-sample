const express = require("express");
const router = express.Router();
const NewsAPI = require('newsapi');
const APIkey = require('../../config/keys').newsApiKey;
const newsapi = new NewsAPI(APIkey);

router.get("/test", (req, res) =>
  res.json({ msg: "This is the links route" })
);


router.get('/', (req, res) => {
  newsapi.v2.topHeadlines({
    category: 'business',
    language: 'en',
    country: 'us'
  })
    //   newsapi.v2.everything({
    //   q: 'bitcoin',
    //   sources: 'bbc-news,the-verge',
    //   domains: 'bbc.co.uk, techcrunch.com',
    //   from: '2017-12-01',
    //   to: '2017-12-12',
    //   language: 'en',
    //   sortBy: 'relevancy',
    //   page: 2
    // })
    .then(response => res.send(response))
    .catch(err => res.send(err))
});



module.exports = router;