const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([{ title: "2BHK Flat", location: "Pune", price: 50 }]);
});

router.post("/", (req, res) => {
  res.json({ message: "Property Added" });
});

module.exports = router;
