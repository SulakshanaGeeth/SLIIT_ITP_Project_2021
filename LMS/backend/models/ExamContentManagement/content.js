const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({

    ExamName : {
        type : String,
        required: true
    },
    LectureTitle:{

        type: String,
        required: true

    },
    Subtitle: {

        type: String,
        required: true
    },
    LectureDescription: {

        type: String,
        required: true
    },
    MeetingLink: {

        type: String,
        required: true
    },
    ReferLink: {

        type: String,
        required: true
    }


})
module.exports = mongoose.model("Content", contentSchema );