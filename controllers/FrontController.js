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
            res.render("register",{msg:req.flash("error")});

        }
        catch (error) {

            console.log(error)

        }


    }

    //data get object

    static insertReq = async(req,res)=>{
        try{
            // console.log("INSERT DATA")
            // console.log(req.body)
            const {n,e,p,cp} = req.body;
            const user = await Usermodel.findOne({email:e});
            // console.log(user);
            if (user){
                req.flash("error","Email already exit");
                res.redirect("/register");
            }else{

            }
            // const result = new Usermodel({
            //     name:n,
            //     email:e,
            //     password:p,
            // });
            // await result.save();
            // res.redirect("/"); //route url
        }
        catch(error){

            console.log(error)

        }
    }

}

module.exports = FrontController;