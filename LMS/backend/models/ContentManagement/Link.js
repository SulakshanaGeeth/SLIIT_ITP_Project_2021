const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const linkSchema = new Schema({
    classid : {
        type : String,
        required : true
    },
    
    link : {
        type : String,
        required : true
    }
})

const Link = mongoose.model("Link", linkSchema);

module.exports = Link;