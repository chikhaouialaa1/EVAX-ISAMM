const mongoose = require("mongoose");

VolontaireSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  center_name: {
    type: String,
    required: false,
  },
  ville_name: {
    type: String,
    required: false,
  },
  gouv_name: {
    type: String,
    required: false,
  },

  gouvernorat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "gouvernoratSchema",
  },
  ville: { type: mongoose.Schema.Types.ObjectId, ref: "ville" },
  centre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "vaccinationCentreSchema",
  },
});

module.exports = mongoose.model("VolontaireSchema", VolontaireSchema);
