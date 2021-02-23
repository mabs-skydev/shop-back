const { getValidationErrors } = require("../utils");
const mongoose = require("mongoose");
const Joi = require("joi");

const Category = mongoose.model(
  "Category",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
  })
);

function validateCategory(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  validations = schema.validate(data, { abortEarly: false });

  if (validations.error)
    return { error: getValidationErrors(validations.error) };

  return validations.value;
}

module.exports.validateCategory = validateCategory;
module.exports.Category = Category;
