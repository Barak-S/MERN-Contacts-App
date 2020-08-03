const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: { 
        type: String, 
        required: true
    },
    lastName: { 
        type: String, 
        required: true 
    },
    phone:{
        type: Number,
        required: true
    },
    emial:{
        type: String,
        required: true 
    },
    userType:{
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('User', UserSchema);