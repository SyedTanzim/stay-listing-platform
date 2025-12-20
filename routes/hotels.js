const express = require('express');
const Hotel = require('../models/hotel');

const router = express.Router(); 

router.get('/', async (req,res)=> {
    const hotels = await Hotel.find({});
    res.render('index.ejs' , {hotels});
});

router.get('/create', (req,res)=> {
    res.render('create.ejs');
});

router.post('/create', (req,res)=> {
    const hotel = req.body;
    const newHotel = new Hotel(hotel);
    newHotel.save();
    res.redirect('/hotels');
})

router.get('/:id', async (req,res)=> {
    const {id} = req.params;
    const hotel = await Hotel.findById(id);
    res.render('show.ejs', {hotel});
});

module.exports = router;