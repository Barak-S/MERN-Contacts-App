const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: true
    },
    number: { 
        type: Number, 
        required: true 
    }
    
});

module.exports = mongoose.model('Contact', ContactSchema);