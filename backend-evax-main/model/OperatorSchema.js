const mongoose = require("mongoose");


operatorSchema=mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password :{
    type: String,
    required: true,
  },
  role:
    {
      type: String,
      required: true,
    },
  centreId:
    {
      type: String,
      required: true,
    },

})


module.exports=Operator=(mongoose.model('operatorcollection', operatorSchema));

















