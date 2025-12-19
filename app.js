//require files
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const hotelRoutes = require('./routes/hotels');

//express app 
const app = express();

//path
app.set('views', path.join(__dirname, 'views'));
app.set('view-engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended : true}));

//db connection
connectDB();

//routes
app.use('/hotels', hotelRoutes);

//server start
app.listen(2003, ()=> {
    console.log('server started');    
});

