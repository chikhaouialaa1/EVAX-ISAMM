const mongoose = require("mongoose");

JpoSchema=mongoose.Schema({
    titre : {
        type: String,
        required: true,
    },
    
    date: {
        type: String,
        required: false,
    },
   })

module.exports = jpo = mongoose.model(
  "JpoSchema",
  JpoSchema
);
