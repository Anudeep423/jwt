const express = require("express");

const router = express.Router();

const userSchema = require("../model/user")

var bcrypt = require('bcryptjs');

var jwt = require('jsonwebtoken');


router.post("/register", (req, res) => {

    var { name, email, password } = req.body;

    var hashedPassword = bcrypt.hashSync(password, 8);

    password = hashedPassword

    const user = new userSchema({ name, email, password })

    user.save((err, user) => {
        if (err) {
            res.json(err)
        } else {
            res.json(user)
        }
    })

})

router.post("/signin", (req, res) => {

    const { email, password } = req.body;

    userSchema.findOne({ email: email }, (err, user) => {
        if (err || !user) {
            return res.json("no user with this email is registered")
        } else {
            bcrypt.compare(password, user.password, function (err, resp) {
                // res === false
                if (resp === false) {
                    res.json("Wrong password")
                } else {
    var token = jwt.sign({_id : user._id }, 'shhhh' , {expiresIn : "15s" } );
                    const name = user.name
                    res.json({token , email , name  })
                }
            });
        }
    })


})


router.get( "/products" ,  (req,res) => {
    const JWT =   req.headers[`authorization`]
    if(!JWT){
       return res.json("provide JWT token ")
    }
    var decoded = jwt.verify(JWT, 'shhhh');

    res.json({ product1 : "book" , product2 : "pen"  })

}  )

module.exports = router