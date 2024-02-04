const Joi = require("joi");

// Added validator for data body request
const validateData = (object) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    name: Joi.string().required(),
    age: Joi.number().required(),
  });
  return schema.validate(object);
};

module.exports = validateData;
