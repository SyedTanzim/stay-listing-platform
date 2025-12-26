const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema ({
    name : {
        type : String,
    },

    description :  String,

    image : {
        type : String,
        
        default : 'https://plus.unsplash.com/premium_photo-1674651240687-92b4ad15d0ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFqJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D',

        set : (v) => v === '' ? 'undefined' : v
    },

    price : Number,
    
    site : String,

    country : String

});

module.exports = mongoose.model('Hotel', hotelSchema);