//require files
const express = require('express');
const path = require('path');
const connectDB = require('./connectDB');
const Hotel = require('./models/schema');

//express app 
const app = express();

//path
app.set('views', path.join(__dirname, 'models'));
app.set('view-engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended : true}));

app.get('/', (req,res)=> {
    let hotel = Hotel.find({});
    res.render('home.ejs' , {hotel});
});

//server start
app.listen(2003, (req,res)=> {
    console.log('server started');    
});

//db connection
connectDB();