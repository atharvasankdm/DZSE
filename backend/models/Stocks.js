const mongoose = require("mongoose")
const { Schema } = mongoose;

const StockSchema = new Schema({
    email: {
        type : String , 
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required : true
    },
    symbol: {
        type: String, 
    },
    weekHigh52: {
        type: Number,
    },
    weekLow52: {
        type: Number,
    },
    marketCap:{
        type: String,
    },
    numberofshares : {
        type : Number,
    }, 
    address: {
        type: String
    },
    price : Number,
    base_price : Number,
    days_30 : [
        {
          "date": Date,
          "closingValue": Number,
        },
    ]
});
const stocks = mongoose.model("stocks", StockSchema);
//users.createIndexes();
module.exports = stocks;