const express = require('express')
const app = express()
const routes = require('./routes/linkRoute')
const cors = require('cors')
const mongoose = require('mongoose')
const db = mongoose.connection

const PORT = process.env.PORT || 3001

mongoose.connect('mongodb://localhost:27017/WebSite_Dolla')
db.once('open', () => { console.log('database loaded') })
db.on('error', () => { console.log(error) })


app.use(cors())
app.use(express.json())

app.use('/', routes)



app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})