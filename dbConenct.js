const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test').then((connections) => {
    console.log('test Data base connected')
    // console.log(connections)
})