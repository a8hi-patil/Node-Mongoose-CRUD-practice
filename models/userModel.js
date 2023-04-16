const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    password: String,
    date: {
        type: Date,
        default: Date.now()
    }
}, {
    timestamps:true
})

module.exports = mongoose.model('user',userSchema)