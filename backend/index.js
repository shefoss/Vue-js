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
mongoose.connect(process.env.CONNECTION_STRING).then(() => { console.log("connected seccessfully") }).catch((err) => { console.log(err) })
