require('dotenv').config();
const express = require('express');
const path = require('path');
const session = require('express-session');
const passport = require('passport');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', maxAge: 1000 * 60 * 60 * 24 } // 1 day,
}));

app.use(passport.initialize());
app.use(passport.session());


const indexRouter = require('./routes/index');
const signupRouter = require('./routes/signupRouter');
const loginRouter = require('./routes/loginRouter');
const createRouter = require('./routes/createRoute');
const membershipRouter = require('./routes/membershipRoute');
const logoutRouter = require('./routes/logoutRouter');
const deleteRouter = require('./routes/deleteRoute');



app.use('/', indexRouter);
app.use('/', signupRouter);
app.use('/', loginRouter);
app.use('/', createRouter);
app.use('/', membershipRouter);
app.use('/', logoutRouter);
app.use('/', deleteRouter);














app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send('Something went wrong. Please try again.');
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Server listening on port ${port}`));
}

module.exports = app;
