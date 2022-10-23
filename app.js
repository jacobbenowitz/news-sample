const express = require("express");
const app = express();
const bodyParser = require('body-parser');
// const passport = require('passport');
const path = require('path');
// const users = require("./routes/api/users");
const news = require("./routes/api/news");

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

// setup middleware for passport
// app.use(passport.initialize());
// require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/news", news);
// app.use("/api/users", users);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is running on port ${port}`));
