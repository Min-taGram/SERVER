require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('morgan')

//PORT 
const PORT = process.env.PORT || 3000


//Routes
const routes = require('./Routes')

const mongoose = require('./configs/mongoose')
mongoose()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(logger('dev'))

app.use('/', routes)

app.listen(PORT, ()=> {
  console.log('This App run on port : ', PORT);
})