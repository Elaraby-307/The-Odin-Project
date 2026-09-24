const {body, validationResult} = require(express-validator);

const validation = [
    body("sender").maxlength
]