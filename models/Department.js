const mongoose = require("mongoose");

const Department = mongoose.model("Department", {
  name: String
});

module.exports = Department;