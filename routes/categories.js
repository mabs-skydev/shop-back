const express = require("express");
const { Category, validateCategory } = require("../models/Category");

const router = express.Router();

router.get("/", async (req, res) => {
  const categories = await Category.find();

  res.json(categories);
});

router.post("/", async (req, res) => {
  const { error } = validateCategory(req.body);
  if (error) return res.status(400).json(error);

  const category = new Category({
    name: req.body.name,
  });

  await category.save();

  res.json(category);
});

module.exports = router;
