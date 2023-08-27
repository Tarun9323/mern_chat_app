const mongoose = require("mongoose");
require('dotenv').config();

const connectToMongo = () =>{
    mongoose.connect(process.env.MONGOURI , {
    useNewUrlParser : true,
    useUnifiedTopology: true
    })
    .then(console.log('connect to mongo success'))
    .catch(err=> console.log(err))
}

module.exports = connectToMongo;