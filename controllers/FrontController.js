const Usermodel = require('../models/user')

class FrontController {
    static login = async (req, res) => {
        try {
            res.render("login")

        }
        catch (error) {

            console.log(error)

        }


    }
    static register = async (req, res) => {
        try {
            res.render("register")

        }
        catch (error) {

            console.log(error)

        }


    }

    //data get object

    static insertReq = async(req,res)=>{
        try{
            // console.log("INSERT DATA")
            console.log(req.body)

        }
        catch(error){

            console.log(error)

        }
    }

}

module.exports = FrontController;