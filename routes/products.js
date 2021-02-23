const express = require("express");
const { Product, validateProduct } = require("../models/Product");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find();

  res.json(products);
});

router.post("/", async (req, res) => {
  const { error } = validateProduct(req.body);
  if (error) return res.status(400).json({ errors: error });

  const product = new Product({
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    details: req.body.details,
    marque: req.body.marque,
    category: req.body.category,
  });

  await product.save();

  res.json(product);
});

module.exports = router;
