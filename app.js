//require files
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const hotelRoutes = require('./routes/hotels');
const engine = require('ejs-mate');
const methodOverride = require('method-override');
const errorHandler = require('./middlewares/errorHandler');

//express app 
const app = express();

//path
app.set('views', path.join(__dirname, 'views'));
app.set('view-engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended : true}));
app.engine('ejs', engine);
app.use(methodOverride('_method'));

//db connection
connectDB();

//routes
app.use('/hotels', hotelRoutes);

app.get('/', (req,res)=> {
    res.redirect('/hotels')
})

//server start
app.listen(2003, ()=> {
    console.log('server started');    
});

app.use(errorHandler);