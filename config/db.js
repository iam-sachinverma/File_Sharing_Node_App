// access .env file variables
require('dotenv').config();

const mongoose = require('mongoose');

function connectDB(){
    
    // mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    //     useNewUrlParser: true, 
    //     useUnifiedTopology:true
    // }).then(() => {
    //     console.log(`Database connected 🥳🥳🥳🥳`);
    // }).catch((err) => console.log(`Connection failed`));

    mongoose.connect(process.env.MONGO_CONNECTION_URL, {
        useNewUrlParser: true, 
        useUnifiedTopology:true
    });

    const connection = mongoose.connection;

    connection.once('open', () => {
        console.log("DB connected successfully");
    });
    connection.on('error', () => {
        console.log("DB connection failed");
    });

}

module.exports = connectDB;

