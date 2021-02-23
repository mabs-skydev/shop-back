const { getValidationErrors } = require("../utils");
const mongoose = require("mongoose");
const Joi = require("joi");

const Marque = mongoose.model(
  "Marque",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
  })
);

function validateMarque(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  validations = schema.validate(data, { abortEarly: false });

  if (validations.error)
    return { error: getValidationErrors(validations.error) };

  return validations.value;
}

module.exports.validateMarque = validateMarque;
module.exports.Marque = Marque;
