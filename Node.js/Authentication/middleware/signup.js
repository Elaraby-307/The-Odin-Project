const { body, validationResult} =  require('express-validator');

const validation = [
    body('fname')
        .trim()
        .notEmpty()
        .withMessage('First name is required'),

    body('lname')
        .trim()
        .notEmpty()
        .withMessage('Last name is required'),

    body('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Invalid email'),

    body('password')
        .trim()
        .notEmpty()
        .withMessage('Password is required'),


    body('confirmPassword')
    .trim()
    .notEmpty()
    .withMessage('Confirm password shouldn,t be empty')
    .custom((value , {req}) => {
        if(value !== req.body.password){
            throw new Error ('Confirm password must match password');
        }

        return true;
    }), 


    
];


function result(req, res, next){
    const errors = validationResult(req).array();
    if(errors.length){
       return res.render('./sign-up', {errors, title: 'sign-up'});
    }

    next();
}


module.exports = {validation, result};