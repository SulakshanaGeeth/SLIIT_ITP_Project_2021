const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newClassRequestSchema = new Schema({

    class_name : {
        type : String,
        required :true
    },
    teacher_id : {
        type : String,
        required :true
    },
    teacher_name : {
        type : String,
        required :true
    },
    subject : {
        type : String,
        required :true
    },
    grade : {
        type : Number,
        required :true
    },
    type : {
        type : String,
        required :true
    },
    fee : {
        type : Number,
        required :true
    },
    day : {
        type : String,
        required :true
    },
    start_time : {
        type : String,
        required :true
    },
    end_time : {
        type : String,
        required :true
    },
    status : {
        type : String,
        required :true
    },
    no_of_students : {
        type : Number,
        required :true
    },
    reason : {
        type : String,
        required :false
    }
    
})

const NewClassRequest = mongoose.model("NewClassRequest", newClassRequestSchema);

module.exports = NewClassRequest;