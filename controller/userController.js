const userModel = require("../models/userModel.js")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRaounds = 10
const readData = async (req, res) => {
    const data = await userModel.find()
    // console.log(data) 

    let jwtt = jwt.sign({ 'Abhi': 'Abhi' }, 'Patil', { expiresIn: '1h' })

    res.set({
        'Content-Type': 'application/json',
        'Token': jwtt
    })
    res.send(data)
}
const readDataOneData = async (req, res) => {
    // console.log(req.headers.authorization)
    let token = req.headers.authorization.split(" ")[1]
    // console.log(token)
    jwt.verify(token, 'Patil', async (err, decoded) => {
        if (!err) {
            const data = await userModel.findOne({ "name": req.params.name })
            // console.log(req.params.name)

            res.send(data)
        } else {
            res.send('Authentication failed')
        }
    })


}
const createDataOneData = async (req, res) => {
    // console.log(req.body)
    const userData = req.body
    console.log(userData)
    console.log(userData.name)
    console.log(userData.password)
    const hashedPassword = bcrypt.hashSync(userData.password, saltRaounds)
    console.log(hashedPassword)
    userData.password = hashedPassword
    const save = await userModel.insertMany(userData)
    // console.log(save,'ll')
    res.send(save)
}
const deleteOneData = async (req, res) => {
    const data = await userModel.findOneAndDelete({ "name": req.params.name })
    // console.log(req.params.name)
    res.send(data)
}
const putOneData = async (req, res) => {
    const userData = req.body;
    console.log(userData)
    console.log(userData.name)
    console.log(userData.password)
    const id = req.params.id;
    console.log(id)
    const doc = await userModel.findByIdAndUpdate({ _id: id }, userData)
    res.send(doc)


}

const loginUser = async (req, res) => {
    const userData = req.body;
    console.log(userData)
    console.log(userData.name)
    console.log(userData.password)
    let found = await userModel.findOne({ name: userData.name })
    const matched = bcrypt.compareSync(userData.password, found.password)
    if (matched) {
        res.send("Logged In Succesfully")
    } else {
        res.send("Logged In Failed")
    }
    


}
module.exports = { readData, readDataOneData, createDataOneData, deleteOneData, putOneData, loginUser }