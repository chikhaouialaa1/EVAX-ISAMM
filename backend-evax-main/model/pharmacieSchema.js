const mongoose = require("mongoose");

pharmacieSchema=mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    gouvernement : {
        type: String,
        required: false,
    },
    ville : { type: mongoose.Schema.Types.ObjectId, ref: 'ville' },
    manager: {
        type: String,
        required: false,
    },
    phone: {
        type: Number,
        required: false,
    },
   })

module.exports = pharmacie = mongoose.model(
  "pharmacieSchema",
  pharmacieSchema
);
