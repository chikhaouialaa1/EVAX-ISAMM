const mongoose = require("mongoose");

vaccinesSchema=mongoose.Schema({
    vaccineName : {
        type: String,
        required: true,
    },
    centerName : {
        type: String,
    },
    quantity : {
        type: Number,
        required: true,
    },
    centerID : {
        type: String,
        required: true,
    }, vaccinID : {
        type: String,
        required: true,
    }
})

module.exports=User=(mongoose.model('vaccinesCollection', vaccinesSchema));