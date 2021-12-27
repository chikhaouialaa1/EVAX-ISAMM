const mongoose = require("mongoose");
gouvernoratSchema=mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    ville: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ville' }]
   })

module.exports=centre=(mongoose.model('gouvernoratSchema', gouvernoratSchema));