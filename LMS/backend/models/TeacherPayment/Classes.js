const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classSchema = new Schema({

    teacher_id:{
        type:String,
        require:true
    },
    teacher_name:{
        type:String,
        require:true
    },
    class_name : {
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
    }
    
})

const Classes = mongoose.model("Classes", classSchema);

module.exports = Classes;