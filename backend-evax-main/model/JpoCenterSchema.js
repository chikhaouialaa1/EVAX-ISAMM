const mongoose = require("mongoose");

JpoCenterSchema=mongoose.Schema({
    
    jpoId:{ type: mongoose.Schema.Types.ObjectId, ref: 'JpoSchema'},
    centreId:{ type: mongoose.Schema.Types.ObjectId, ref: 'vaccinationcentreSchema'},
    volontaire:[{ type: mongoose.Schema.Types.ObjectId, ref: 'VolontaireSchema'}]
   })

module.exports = jpo = mongoose.model(
  "JpoCenterSchema",
  JpoCenterSchema
);
