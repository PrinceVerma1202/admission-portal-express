const mongoose = require('mongoose')

const connectdb = ()=>{
    return mongoose.connect('mongodb://127.0.0.1:27017/riya1234')
    .then(()=>{
        console.log('connnet successfully')
    }).catch((error)=>{
        console.log(error)
    })
}
module.exports =connectdb;