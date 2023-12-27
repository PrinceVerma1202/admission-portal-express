const express = require('express')
const FrontController = require('../controllers/FrontController')

const route = express.Router();

route.get('/',FrontController.login)
route.get('/register',FrontController.register)

// data insert 
route.post('/insertreg',FrontController.insertReq)

module.exports=route;

