const mongoose = require('mongoose');

// we are defining a Schema by specifying data types
const userSchema = new mongoose.Schema({
    username: String,
    password: String 
})

// Compile a 'Movie' model using the movieSchema as the structure.
// Mongoose also creates a MongoDB collection called 'Movies' for these documents.
module.exports = mongoose.model('User', userSchema)