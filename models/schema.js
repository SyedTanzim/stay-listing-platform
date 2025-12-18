const mongoose = require('mongoose');

const schema = new mongoose.Schema ({
    name : {
        type : String,
        required : true
    },
    discription : {
        type : String
    },
    image : {
        type : String,
        
        default : 'https://plus.unsplash.com/premium_photo-1674651240687-92b4ad15d0ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFqJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D',

        set : (v) => v === '' ? 'https://plus.unsplash.com/premium_photo-1674651240687-92b4ad15d0ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFqJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D' : v
    },
    price : {
        type : Number
    },
    site : {
        type : String
    },
    country : {
        type : String
    }
});

const Hotel = mongoose.model('Hotel', schema);

module.exports = Hotel;