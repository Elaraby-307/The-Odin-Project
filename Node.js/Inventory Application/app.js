const express = require('express');
const app = express();
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Routes
const indexRouter = require('./routes/indexRoute');
const updateRouter = require('./routes/updateRoute');
const createRoute = require('./routes/createRoute');
const deleteRoute = require('./routes/deleteRoute');

app.use('/', indexRouter);
app.use('/', updateRouter);
app.use('/', createRoute);
app.use('/', deleteRoute);



















app.listen(3000, () => {
    console.log("Server is running");
})
