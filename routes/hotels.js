const express = require('express');
const Hotel = require('../models/hotel');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync');
const expressError = require('../errors/expressError');
const schemaValidate = require('../models/schemaValidate');

const app = express();
app.use(express.urlencoded({extended : true}));

//validate function
const validateFunction = (req, res, next) => {
    let {error , result} = schemaValidate.validate(req.body.hotel , {abortEarly : false});
    console.log(result);  
    if (error) {
        throw new expressError(400, error);   
    } else {
        next();
    }
};

//home route
router.get('/', wrapAsync(async (req, res) => {
    const hotels = await Hotel.find({});
    res.render('pages/index.ejs', { hotels });
}));

//create route
router.get('/create', wrapAsync(async (req, res) => {
    res.render('pages/create.ejs');
}));

router.post('/create', validateFunction, wrapAsync(async (req, res, next) => {
    const newHotel = new Hotel(req.body.hotel);
    await newHotel.save();
    res.redirect('/hotels');
}));

//edit route
router.get('/edit/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const hotel = await Hotel.findById(id);
    res.render('pages/edit.ejs', { hotel });
}));

router.put('/edit/:id', validateFunction,  wrapAsync(async (req, res) => {
    const id  = req.params.id;
    await Hotel.findByIdAndUpdate(id, req.body.hotel);
    res.redirect(`/hotels/${id}`);
}));


//delete route
router.delete('/delete/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Hotel.findByIdAndDelete(id);
    res.redirect('/hotels');
}));


//show route
router.get('/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const hotel = await Hotel.findById(id);
    res.render('pages/show.ejs', { hotel });
}));

module.exports = router;