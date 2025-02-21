
const Db = require('../models/task')

const saveTasks =(req, res) => {
    const data = req.body
    const newData = new Db(data)
    newData.save()
    res.status(201).send("created") 
  }

module.exports = saveTasks