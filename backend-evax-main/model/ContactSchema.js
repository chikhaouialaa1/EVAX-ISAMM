const mongoose = require("mongoose");


ContactSchema = mongoose.Schema({
  message: {
    type: String,
    required: true,
  }
});


module.exports = mongoose.model("contactcollection", ContactSchema);
