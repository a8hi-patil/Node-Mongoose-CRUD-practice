const userConrtoller = require('../controller/userController')
// readData()
// console.log(userConrtoller.readData())
const express = require('express')
const router = express.Router()
const hitCountLoggerForReadAllData = require("../middleware/hitCountReadAllData")
router.get('/user', hitCountLoggerForReadAllData, userConrtoller.readData)
router.get('/user/:name', userConrtoller.readDataOneData)
router.post('/user', userConrtoller.createDataOneData)
router.post('/login', userConrtoller.loginUser)
router.delete('/user/:name', userConrtoller.deleteOneData)
router.put('/user/:id', userConrtoller.putOneData)

module.exports = router;