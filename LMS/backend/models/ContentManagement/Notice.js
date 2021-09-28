const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noticeSchema = new Schema({
    classid : {
        type : String,
        required : true
    },
    
    notice : {
        type : String,
        required : true
    }
})

const Notice = mongoose.model("clsNotice", noticeSchema);

module.exports = Notice;