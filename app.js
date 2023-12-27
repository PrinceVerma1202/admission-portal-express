const express = require('express')
const FrontController = require('./controllers/FrontController')
const { connect } = require('mongoose')
const web = require('./routes/web')
const connectdb = require("./db/connectdb")
const app = express()
const port = 3000

// connectdb 
connectdb();

//data get object
// parse application/x-www-from-urlencoded
app.use(express.urlencoded({extended:false}));

//ejs link
app.set("view engine", "ejs");

// css img link 
app.use(express.static('public'))
// routes

app.use('/', web)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})