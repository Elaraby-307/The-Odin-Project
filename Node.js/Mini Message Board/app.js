const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));





const {router:indexRouter} = require('./routes/index');
const messageRouter = require('./routes/message');



app.use('/', indexRouter);
app.use('/', messageRouter);




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});