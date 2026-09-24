const {body, validationResult} = require('express-validator');

const validation = [
    body("sender")
        .trim()
        .isLength({ max: 12 })
        .withMessage("Sender should be less than 12 characters")
        .isLength({ min: 8 })
        .withMessage("Sender should be more than 8 characters"),

    body("content")
        .isLength({ max: 50 })
        .withMessage("Message content should be less than 50 characters")
        .isLength({ min: 30 })
        .withMessage("Message content should be more than 30 characters")
];


const validResult = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).render('error',{title: "error", errors})
    }

    next();

}

module.exports = {
    validation,
    validResult
}