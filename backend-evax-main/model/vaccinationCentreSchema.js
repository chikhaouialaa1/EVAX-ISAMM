const mongoose = require("mongoose");

vaccinationCentreSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  government: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  manager: {
    type: String,
  },
  capacity: {
    type: String,
  },
});

module.exports = centre = mongoose.model(
  "vaccinationcentreSchema",
  vaccinationCentreSchema
);
