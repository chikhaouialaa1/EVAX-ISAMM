const mongoose = require("mongoose");



userSchema=mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
   
    email :
    {
        type:String,
        required: true
    },
    role :
    {
        type:String,
        required: false,
        default: "user"
    },
    Date: {
        type: String,
        required: false,
    },
    ncin: {
        type: Number,
        required: true,
        default: 0
    },
    nmobile :{
        type: Number,
        required: true,
        default: 0
    },
    password :{
      type: String,
      required: true,
    },
    date_nais:
    {
      type:String,
    },
    active:
    {
      type:Boolean,
      default:false
    },
    vaccine:
    {
      type:String,
      default:"-"
    },
})


module.exports=User=(mongoose.model('usercollection', userSchema));

















