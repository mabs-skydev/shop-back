const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/api/marques", require("./routes/marques"));
app.use("/api/categories", require("./routes/categories"));
app.use("/api/products", require("./routes/products"));

mongoose
  .connect("mongodb://localhost/little-shop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database..."))
  .catch(err => {
    console.log("Error while connecting to database: ", err);
  });

app.listen(5000);
