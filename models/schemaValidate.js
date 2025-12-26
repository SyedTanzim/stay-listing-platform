const Joi = require('joi');

const schemaValidate = Joi.object({
        name: Joi.string().max(30).required(),
        description: Joi.string().required(),
        image: Joi.string().allow("",null),
        price: Joi.number().max(99999999).min(0).required(),
        site: Joi.string().required(),
        country: Joi.string().max(30).required()
});

module.exports = schemaValidate;