require('dotenv').config();
const db = require('../db/queries');

function getMembership(req, res, next) {
    res.render('membership', { title: 'Membership' });
}

async function postMembership(req, res, next) {
    const { secret } = req.body;

    if (secret === process.env.MEMBERSHIP_SECRET) {
        try {
            await db.updateMembership(req.user.id, 'Member');
            req.user.membership = 'Member'; // Update the user object in the session
            res.redirect('/');
        } catch (error) {
            next(error);
        }
    } else {
        res.render('membership', { title: 'Membership', errors: ['Invalid membership code'] });
    }
}

module.exports = { getMembership, postMembership };
