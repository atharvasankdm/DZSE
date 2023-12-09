const mongoose = require("mongoose");
const mongoUri = 'mongodb+srv://jeet:jeetdse@cluster0.706cghq.mongodb.net/?retryWrites=true&w=majority'


const connectToAtlas = () => {
    mongoose.connect(mongoUri).then(() => {
        console.log("connected to DB!!");
    }).catch((err) => {
        console.log("error....!!!!" + err);
    })
}

module.exports = connectToAtlas
