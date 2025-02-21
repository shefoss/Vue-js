const mongoose = require('mongoose')

const task = new mongoose.Schema({
    task:String
})

const model = mongoose.model("test",task);

module.exports =model;