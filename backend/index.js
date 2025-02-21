const express = require('express')
const mongoose = require('mongoose')
const taskRouter = require('./routers/taskRouter')

const app = express()
const port = 3000

app.use(express.json())
app.use('/',taskRouter)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
mongoose.connect("mongodb+srv://khalid:khalid147369@cluster0.t47k6tg.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0").then(() => { console.log("connected seccessfully") }).catch((err) => { console.log(err) })
