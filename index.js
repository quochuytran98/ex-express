const express = require('express');
const path = require('path');
const mongoose = require("mongoose");
require('dotenv').config()
const cron = require('node-cron');
const bodyParser = require('body-parser');
const Logger = require('morgan')
const app = express();
const port = process.env.PORT || 3000;
const programmingLanguagesRouter = require('./src/routes/frontend.route');


mongoose.connect(process.env.MONGO_URL || 'mongodb+srv://tqhuy1998bt:Quochuy98@cluster0.kikihux.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Logger('combined'))
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/', programmingLanguagesRouter);


/* use view ejs */
app.set('views', path.join(__dirname, './src/views'))
app.set('view engine','ejs');
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
