const express = require('express');
const Hotel = require('../models/hotel');
const router = express.Router(); 


//home route
router.get('/', async (req,res)=> {
    const hotels = await Hotel.find({});
    res.render('pages/index.ejs' , {hotels});
});

//create route
router.get('/create', (req,res)=> {
    res.render('pages/create.ejs');
});

router.post('/create', (req,res)=> {
    const {hotel} = req.body;
    const newHotel = new Hotel(hotel);
    newHotel.save();
    res.redirect('/hotels');
});

//show route
router.get('/:id', async (req,res)=> {
    const {id} = req.params;
    const hotel = await Hotel.findById(id);
    res.render('pages/show.ejs', {hotel});
});

//edit route
router.get('/:id/edit', async (req,res)=>{
    const {id} = req.params;
    const hotel = await Hotel.findById(id);
    res.render('pages/edit.ejs', {hotel});
});

router.put('/:id/edit', async (req,res)=>{
    const {id} = req.params;
    await Hotel.findByIdAndUpdate(id , req.body.hotel);
    res.redirect('/hotels');   
});


//delete route
router.delete('/:id/delete', async (req,res)=>{
    const {id} = req.params;
    await Hotel.findByIdAndDelete(id);
    res.redirect('/hotels');   
});

module.exports = router;