const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tuteSchema = new Schema({
    id : {
        type : String,
        required : true
    },
    
    name :{
        type : String,
        required : true       
    },
    
    tute : {
        type : String,
        required : true
    }
})

const Tute = mongoose.model("Tute", tuteSchema);

module.exports = Tute;