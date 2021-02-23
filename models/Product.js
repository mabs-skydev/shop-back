const mongoose = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const { getValidationErrors } = require("../utils");

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      min: 0,
      required: true,
    },
    price: {
      type: Number,
      min: 0,
      required: true,
    },
    details: {
      type: String,
    },
    marque: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "marques",
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
      required: true,
    },
  })
);

function validateProduct(data) {
  const schema = Joi.object({
    name: Joi.string().required(),
    quantity: Joi.number().min(0).required(),
    price: Joi.number().min(0).required(),
    details: Joi.string().allow(null, ""),
    marque: Joi.objectId().required(),
    category: Joi.objectId().required(),
  });

  const validations = schema.validate(data, { abortEarly: false });

  if (validations.error)
    return { error: getValidationErrors(validations.error) };

  return validations.value;
}

module.exports.Product = Product;
module.exports.validateProduct = validateProduct;
