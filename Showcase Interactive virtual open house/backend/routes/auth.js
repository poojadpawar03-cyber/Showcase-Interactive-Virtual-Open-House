const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.json({ message: "Login successful (dummy)" });
});

router.post("/register", (req, res) => {
  res.json({ message: "Register successful (dummy)" });
});

module.exports = router;
