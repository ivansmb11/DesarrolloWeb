const mongoose = require('mongoose');

const Users = mongoose.model('Users', {
  name: { type: String, required: true, minLength: 3 },
  lastName: { type: String, required: true, minLength: 3 },
});

module.exports = { Users };
