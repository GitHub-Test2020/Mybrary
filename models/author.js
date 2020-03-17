const mongoose = require('mongoose')

// Setting up a Schema
const authorSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model('Author', authorSchema)