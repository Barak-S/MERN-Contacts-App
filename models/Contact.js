const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: true
    },
    number: { 
        type: Number, 
        required: true 
    },
    address:{
        type: String
    }
    
});

module.exports = mongoose.model('Contact', ContactSchema);