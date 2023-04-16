const fs = require('fs')
const hitCountLogger = (req, res, next) => {
    fs.readFile('hitCounts.txt', 'utf-8', function (err, data) {

       
        
        const newData = data.split(" ")
        // console.log(newData)
        // console.log(newData[newData.length - 1])
        newData[newData.length - 1] = +newData[newData.length - 1] + 1
        // console.log(newData[newData.length - 1])
        // console.log(newData)
        const modifiedData = newData.join(' ')
        
        fs.writeFile('hitCounts.txt', modifiedData, (err, suc) => {
            if (!err) {
                console.log("Log saved")
            }
        })
    });
    next()
}

module.exports = hitCountLogger