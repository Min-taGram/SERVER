require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000
const router = require('./Routes')

const mongoose = require('./configs/mongoose')
mongoose()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.use('/', router)

app.listen(PORT, ()=> {
  console.log('This App run on port : ', PORT);
})