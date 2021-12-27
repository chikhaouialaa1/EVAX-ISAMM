const mongoose = require("mongoose");

<<<<<<< HEAD
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
=======
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
>>>>>>> 89efbd1760f12233e2634a6d62edb6e9e76507de

module.exports = centre = mongoose.model(
  "vaccinationcentreSchema",
  vaccinationCentreSchema
);
