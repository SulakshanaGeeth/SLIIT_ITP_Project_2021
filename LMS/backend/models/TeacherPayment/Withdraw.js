const mongoose = require('mongoose');
const Bank = require('./Bank');


const Schema = mongoose.Schema;

const bankSchema = new Schema({

    Acc_no:{
        type:Number
    },
    Bank_name:{
        type:String
    },
    Branch_name:{
        type:String
    },
    Acc_Holder_name:{
        type:String
    }
    
})

const classes = new Schema({

    Subject : {
        type : String
    },
    Grade : {
        type : Number
    },
    Class_fee:{
        type:Number
    },
    No_of_students:{
        type:Number
    },
    Total_Amount:{
        type:Number
    }
    
})

const withdrawSchema = new Schema({

    Teacher_ID :{
        type:String,
    },
    Teacher_name:{
        type:String,
    },
    Banks : [bankSchema],
    Classes: [classes],
    Deduct_amount:{
        type:Number,
    },
    Withdraw_amout:{
        type:Number,
    },
    
    Request_date:{
        type:String,
    },
    State : {
        type:String,
    }
    
})

const Withdraw = mongoose.model("Teacher_payment",withdrawSchema);

module.exports = Withdraw;