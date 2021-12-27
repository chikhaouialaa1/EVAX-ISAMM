mongoose = require('mongoose') ;
var Schema = mongoose.Schema;

var Schema = new mongoose.Schema ({
   
    name :  {
        type : String
    } ,
    gouvernorat:{ type: mongoose.Schema.Types.ObjectId, ref: 'gouvernoratSchema' },
   
}) ;

module.exports = mongoose.model('ville' , Schema) ;
