const mongoose = require('mongoose');

async function connectDB() {
    await mongoose.connect('mongodb://localhost:27017/hotel_listing')
}

connectDB().then((res) => {
    console.log('connected to database');    
}).catch((err) => {
    console.log(err);    
});

module.exports = connectDB;