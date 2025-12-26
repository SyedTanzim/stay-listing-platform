const express = require('express');
const Hotel = require('../models/hotel');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync');
const expressError = require('../errors/expressError');
const hotelSchema = require('../models/hotel');
const schemaValidate = require('../models/schemaValidate');

const app = express();
app.use(express.urlencoded({extended : true}));

//home route
router.get('/', wrapAsync(async (req, res) => {
    const hotels = await Hotel.find({});
    res.render('pages/index.ejs', { hotels });
}));

//create route
router.get('/create', wrapAsync(async (req, res) => {
    res.render('pages/create.ejs');
}));

router.post('/create', wrapAsync(async (req, res, next) => {
    const result = schemaValidate.validate(req.body.hotel , {abortEarly : false});
    if(result.error){
        throw new expressError(400, result.error)
    }
    console.log(result);
    const newHotel = new Hotel(result.value);
    await newHotel.save();
    res.redirect('/hotels');
}));

//edit route
router.get('/edit/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const hotel = await Hotel.findById(id);
    res.render('pages/edit.ejs', { hotel });
}));

router.put('/edit/:id', wrapAsync(async (req, res) => {
    const id  = req.params.id;
    const result = schemaValidate.validate(req.body.hotel , {abortEarly : false});
    if(result.error){
        throw new expressError(400, result.error)
    }
    await Hotel.findByIdAndUpdate(id, result.value);
    res.redirect('/hotels');
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