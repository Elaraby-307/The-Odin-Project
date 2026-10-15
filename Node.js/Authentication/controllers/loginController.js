
const db = require('../db/queries');
const bcrypt = require('bcryptjs');

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy


passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
            try {
                const user = await db.findUser(email);

                if (!user) {
                    return done(null, false, {
                        message: 'Incorrect email or password'
                    });
                }

                const match = await bcrypt.compare(
                    password,
                    user.passwords
                );

                if (!match) {
                    return done(null, false, {
                        message: 'Incorrect email or password'
                    });
                }

                return done(null, user);

            } catch (error) {
                return done(error);
            }
        }
    )
);


passport.serializeUser((user, done) => done(null, 
  { 
    id : user.id,
    membership: user.membership,
    admin: user.id_admin
  }
));



passport.deserializeUser(async (userData, done) => {
    try {
        const user = await db.findUserByID(userData.id);
        done(null, user || false);
    } catch (error) {
        done(error);
    }
});








function getLogin(req, res) {
  const errors = req.session.messages || [];
  delete req.session.messages;
  res.render('login', {
    title: 'log-in',
    errors
  });
}







module.exports = {getLogin, passport}
