const mongoose = require("mongoose");

ContactSchema = mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model("contactcollection", ContactSchema);
