// const express = require("express");

// const app = express();

// const port = 8080;

// const mongoose = require("mongoose")

// const bodyParser = require("body-parser")

// var jwt = require('jsonwebtoken');

// const userRoutes = require("./view/user")


// mongoose.connect("mongodb+srv://Anudeep123:12345678aA$@cluster0.ni9vp.mongodb.net/JWT?retryWrites=true&w=majority",{ useNewUrlParser: true , useUnifiedTopology: true }).
// then( () => {console.log(`DB CONNECTEd`)} )
// .catch( (err) => {console.log(err)}  ) 

// app.use(bodyParser.json())

// app.use(userRoutes)



// // app.post("/signin" , (req,res) => {

// //     const {email, name , pasword  } = req.body;


// //     var token = jwt.sign({email : email }, 'shhhh',{ expiresIn: '20s' });


    
// // res.json( {token ,  email , name , pasword  } )

// // }  )





// // app.get("/getposts" , (req,res) => {

// //     const JWT =   req.headers[`authorization`]
// //     var decoded = jwt.verify(JWT, 'shhhh');
// //     res.json(decoded.email)
// // } )





// app.listen(port , () => {
//     console.log(`server started listening on port ${port}`)
// } )




// var bcrypt = require('bcryptjs');

// var hash = bcrypt.hashSync('bacon', 8);

// console.log(hash)


// var hash1 = bcrypt.hashSync('bacon', 8);

// console.log(hash1)


// bcrypt.compare("bacon", hash, function(err, res) {
//     // res === false
//     console.log(`result`,res)
// });
