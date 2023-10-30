const mongoose = require('mongoose')

const FamilySchema = mongoose.Schema({

    username: String,
    email: String,
    password: String

})

module.exports = mongoose.model('mafamily', FamilySchema)