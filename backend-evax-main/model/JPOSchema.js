mongoose = require('mongoose') ;
var JPOSchema = mongoose.Schema;

var JPOSchema = new mongoose.Schema ({
   
    title :  {
        type : String
    } ,
    Date :  {
        type : String
    } ,
    gouvernorat:{ type: mongoose.Schema.Types.ObjectId, ref: 'gouvernoratSchema' },
    ville : { type: mongoose.Schema.Types.ObjectId, ref: 'ville' },
    centre:{ type: mongoose.Schema.Types.ObjectId, ref: 'ville' },
    vaccin:[{
        vaccType:{
            type: String
        },
        quantity:{
            type: String
        }
    }],
    volontaire: [{ type: mongoose.Schema.Types.ObjectId, ref: 'VolontaireSchema' }]
}) ;

module.exports = mongoose.model('JPOSchema' , JPOSchema) ;
