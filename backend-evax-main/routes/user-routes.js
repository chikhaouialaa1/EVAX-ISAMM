const express= require("express") ;
const User = require("../model/userSchema");
const confirmation = require("../model/conifmrationSchema");
const ConfirmationUsers = require("../model/confirmedUsersSchema");
const Centre = require("../model/vaccinationCentreSchema");


const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
require("dotenv").config();
var nodemailer = require('nodemailer');

const middlewares=require("../middleware/user-midlewares");
const { find, findById } = require("../model/userSchema");
const { response } = require("express");


const SECRET_KEY=process.env.SECRET_KEY

router.post('/rvd',(req,resp)=>{
  function addMinutes(date, minutes) {
      return new Date(new Date(date).getTime() + minutes*60000);
  }
  function addDays(date, days) {
      var result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    }
    var d = new Date();
console.log(d);
  Centre.findOne({_id:req.body.id  }, function(err, docs) {
      var date_diff_indays = function(date1, date2) {
          dt1 = new Date(date1);
          dt2 = new Date(date2);
          return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
          }
          var days=date_diff_indays(Date.now(), docs.rendervous);
          if(days<=0){
              var now  = new Date();
              now.setDate(now.getDate() + 1)
              now.setHours(8);
              now.setMinutes(0);
              docs.rendervous=now;
              docs.currentcapacity=docs.capacity;
          }
      docs.currentcapacity=docs.currentcapacity-1;
      if(docs.currentcapacity<=0){
          docs.currentcapacity=docs.capacity;
          //docs.rendervous=addDays(docs.rendervous,1);
          docs.rendervous=addMinutes(docs.rendervous,30);
      }
      if(new Date(docs.rendervous).getHours()>=17){
          docs.rendervous=addMinutes(docs.rendervous,60*15);
      }
      console.log(new Date(docs.rendervous).getHours());
      User.findOneAndUpdate({_id:req.body.id},  {'date':docs.rendervous}, {new: true}, function(err, doc) {
        if (!err) {
          console.log("saved");
        }
    });
      Centre.findOneAndUpdate({_id:req.body.id },
          docs,
          { new: true },
          (err, contact) => {
          if (err) {
            resp.status(400).json(err);
          }


        });
  })
 
})


module.exports = router ;