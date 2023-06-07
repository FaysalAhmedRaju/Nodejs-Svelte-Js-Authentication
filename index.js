const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/node_auth',{},() => {
    useNewUrlParser: true,
    useUnifiedTopology: true
    console.log("connected to the database")
})

app = express()



app.listen(8000)