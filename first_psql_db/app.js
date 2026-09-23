const express = require('express');
const app = express();

const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//Routes
const indexRoute = require("./routes/indexRoute");
const newRoute = require("./routes/newRoute");
const deleteRoute = require("./routes/deleteRoute");

// Middleware to parse JSON requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use("/", indexRoute);
app.use("/", newRoute);
app.use("/", deleteRoute);




app.listen(3000, () => {
  console.log('Server is running on port 3000');
});