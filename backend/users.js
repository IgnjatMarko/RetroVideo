// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");

// const Users = mongoose.model('Users',{
//     name:{
//         type:String,
//     },
//     email:{
//         type:String,
//         unique:true,
//     },
//     password:{
//         type:String,
//         unique:true,
//     },
//     cartData:{
//         type:Object,
//     },
//     date:{
//         type:Date,
//         default:Date.now,
//     }
// });

// module.exports = {
    
//     signUp: async (req, res) => {
//         let check = await Users.findOne({email:req.body.email});
//         if (check) {
//             return res.status(400).json({success:false,errors:"Existing user found with same email address"})
//         }
//         let cart = {};
//         for (let i = 0; i < 300; i++) {
//             cart[i]=0;            
//         }
//         const user = new Users({
//             name:req.body.username,
//             email:req.body.email,
//             password:req.body.password,
//             cartData:cart,
//         })

//         await user.save();

//         const data = {
//             user:{
//                 id:user.id
//             }
//         }

//         const token = jwt.sign(data,"secret_ecom");
//         res.json({success:true,token})
//     }
// }