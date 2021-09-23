const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bankSchema = new Schema({

    Teacher_ID:{
        type:String,
        require:true
    },
    Acc_no:{
        type:Number,
        require:true
    },
    Bank_name:{
        type:String,
        require:true
    },
    Branch_name:{
        type:String,
        require:true
    },
    Acc_Holder_name:{
        type:String,
        require:true
    }
    
})

const Bank = mongoose.model("Bank",bankSchema);

module.exports = Bank;