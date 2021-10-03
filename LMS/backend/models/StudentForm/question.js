const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({

    Name: {
        type : String,
        required: true
    },
    QuestionCategory:{

        type: String,
        required: true

    },
    QuestionTitle: {

        type: String,
        required: true
    },
    Question: {

        type: String,
        required: true
    }


})
module.exports = mongoose.model("Question", questionSchema );