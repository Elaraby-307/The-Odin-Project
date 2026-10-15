function requireAuth(req, res, next) {
  if (req.isAuthenticated()) return next();
  return res.redirect('/log-in');
}

function requireAdmin(req, res, next) {
  if (!req.isAuthenticated()) return res.redirect('/log-in');
  if (String(req.user.is_admin).toLowerCase() !== 'true') return res.redirect('/');
  return next();
}

// function requireMember(req, res, next) {
//   if (!req.isAuthenticated()) return res.redirect('/login');
//   if (String(req.user.membership).toLowerCase() !== 'member') return res.redirect('/join-membership');
//   return next();
// }

module.exports = { requireAuth, requireAdmin };
