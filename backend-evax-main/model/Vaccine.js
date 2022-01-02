const mongoose = require("mongoose");

vaccine=mongoose.Schema({
    vaccineName : {
        type: String,
        required: true,
    }
})

module.exports=User=(mongoose.model('vaccine', vaccine));