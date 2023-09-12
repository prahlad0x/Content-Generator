const express = require('express')
require('dotenv').config()
const cors = require('cors');
const { ContentGenRouter } = require('./router/contentGenerator.route');


const app = express()
app.use(express.json())
app.use(cors())

 app.use('/content-creator', ContentGenRouter)

  app.listen(process.env.port,()=>{
    console.log('server is running')
  })