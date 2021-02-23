const express = require("express");
const { Marque, validateMarque } = require("../models/Marque");

const router = express.Router();

router.get("/", async (req, res) => {
  const marques = await Marque.find();

  res.json(marques);
});

router.post("/", async (req, res) => {
  const { error } = validateMarque(req.body);
  if (error) return res.status(400).json(error);

  const marque = new Marque({
    name: req.body.name,
  });

  await marque.save();

  res.json(marque);
});

module.exports = router;
