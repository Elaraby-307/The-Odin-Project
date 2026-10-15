const db = require('../db/queries');
const { body, validationResult } = require('express-validator');


const validation = [
    body('title')
        .trim()
        .notEmpty()
        .withMessage('Title is required')
        .isLength({ max: 50 })
        .withMessage('Title must be at most 50 characters long'),

    body('body')
        .trim()
        .notEmpty()
        .withMessage('Body is required')
        .isLength({ max: 500 })
        .withMessage('Body must be at most 500 characters long')
];

const result = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.render('create', { errors: errors.array(), title: 'Create Message' });
    }

    next();
}

function getCreate(req, res, next){
    if(!req.user){
        return res.redirect('/');
    }

    return res.render('create', {title: 'Create Message'})
}


async function postCreate(req, res, next){
    if(!req.user){
        return res.redirect('/');
    }   
    await db.insertMessage(req.body.title, req.body.body, req.user.id)
    .then(() => res.redirect('/'))
    .catch((error) => {
        console.error('DATABASE ERROR:', error);
        return res.render('create', {errors: [error], title: 'Create Message'});
    });
}


module.exports = { validation, result, getCreate, postCreate };