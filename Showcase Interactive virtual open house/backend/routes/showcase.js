const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Showcase fetched" });
});

router.post("/", (req, res) => {
  res.json({ message: "Showcase scheduled" });
});

module.exports = router;
