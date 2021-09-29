const mongoose = require ('mongoose');

const Schema = mongoose.Schema;
      
  const NoticeSchema = new Schema({

    massege : {
             
      type : String,
      required: true


    },
    
     date : {
       type: String,
       required: true

     }




  })

  const Notice = mongoose.model("Notice",NoticeSchema);

  module.exports = Notice;
  