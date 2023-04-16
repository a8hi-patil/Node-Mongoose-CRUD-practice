require('./dbConenct')
const express = require('express')
const app = express()
const hitCountLogger = require('./middleware/hitCountLogger.js')
// const router = require("./routes/userRoute.js")
app.use(express.json())
app.use(hitCountLogger)
app.use(require("./routes/userRoute.js"))

app.listen(3001, () => {
    console.log('Server Started on 3001')
})