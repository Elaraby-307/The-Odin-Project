const db = require('../db/queries');



function getSignUp(req, res) {
  res.render('sign-up', { title: 'Sign up'});
}

async function postSignUp(req, res, next) {
  try{

    await db.postSignUp(req.body.fname,
      req.body.lname,
      req.body.email,
      req.body.password);

      let admin = req.body.admin === 'true' ? true : false;
      if(admin) await db.updateAdmin(req.body.email, admin);


      res.redirect('/log-in')
  }catch (error){
    res.render('sign-up', {errors : [error], title: 'sign-up'});
  }  

}


function getLogout(req, res, next) {
  req.logout((error) => {
    if (error) return next(error);
    req.session.destroy(() => res.redirect('/log-in'));
  });
}


async function indexController(req, res, next){
  const messages = await db.getAllMessages();
  res.render('index',{messages, title: 'forum', user: req.user});
}

module.exports = { getSignUp, postSignUp, getLogout, indexController };
