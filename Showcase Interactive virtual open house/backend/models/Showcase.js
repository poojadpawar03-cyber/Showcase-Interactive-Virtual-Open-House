const mongoose = require("mongoose");

const ShowcaseSchema = new mongoose.Schema({
  propertyId: String,
  scheduledTime: String,
  roomId: String
});

module.exports = mongoose.model("Showcase", ShowcaseSchema);
