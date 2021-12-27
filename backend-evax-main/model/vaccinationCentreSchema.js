const mongoose = require("mongoose");

vaccinationCentreSchema=mongoose.Schema({
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
    capacity :  {
        type : String
    } ,
    currentcapacity :  {
        type : String
    } ,
    rendervous :  {
        type : String
    } 
   })

module.exports=centre=(mongoose.model('vaccinationcentreSchema', vaccinationCentreSchema));