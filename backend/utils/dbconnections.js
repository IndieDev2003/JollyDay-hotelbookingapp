const mongoose = require('mongoose');
require('dotenv').config();

function connectToDb(){
    return mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@clustersharpener.ru5nn.mongodb.net/${process.env.DB_PROJECT_NAME}?retryWrites=true&w=majority&appName=ClusterSharpener`)
}

module.exports = connectToDb;