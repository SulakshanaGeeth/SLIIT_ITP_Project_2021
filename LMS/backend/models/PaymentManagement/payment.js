const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({


    name : {
        type : String,
        required : true
},


    cardNumber : {
             type : Number,
             required : true
   },

     ExpireDate : {
            type : Number,
            required : true
   },

       cvv : {
               type : Number,
               required : true
}
})

const Payment = mongoose.model("Payment",paymentSchema);
module.exports = Payment;