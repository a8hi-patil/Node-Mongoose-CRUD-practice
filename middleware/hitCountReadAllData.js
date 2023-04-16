const fs = require('fs')
const hitCountLoggerForReadAllData = (req, res, next) => {
    fs.readFile('hitCountRead.txt', 'utf-8', (err, data) => {
        if (!err) {
            let newdata = data.split(" ")
            newdata[newdata.length - 1] = +newdata[newdata.length - 1] + 1
            newdata = newdata.join(" ")
            fs.writeFile('hitCountRead.txt', newdata, (err, data) => {
                if (!err) {
                    console.log("Log Saved")
                }
            })

        }
    })
    next()
}
module.exports = hitCountLoggerForReadAllData