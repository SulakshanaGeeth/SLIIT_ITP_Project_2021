const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FreeCardSchema = new Schema({

        request : {
            type : String,
            required : true
        }
})

const freeCard = mongoose.model("freeCard",FreeCardSchema);

module.exports = freeCard;