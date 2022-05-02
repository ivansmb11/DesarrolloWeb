const mongoose = require('mongoose');

const User = mongoose.model('User', {
    name: {type: String, required: true, minLength: 3},
    lastName: {type: String, required: true, minLength: 3},
});

module.exports = User;