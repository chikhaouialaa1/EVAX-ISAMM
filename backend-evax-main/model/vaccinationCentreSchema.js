const mongoose = require("mongoose");

vaccinationCentreSchema=mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    gouvernement : {
        type: String,
        required: true,
    },
    manager: {
        type: String,
        required: false,
    }
})

module.exports=centre=(mongoose.model('vaccinationcentreSchema', vaccinationCentreSchema));