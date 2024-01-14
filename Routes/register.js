const express =require('express')
const router = express.Router();
const User =require('../model/userSchema')
router.post('/register',async (req,res)=>{
    try{
       await User.create({
            username: req.body.username,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({success:true});
    }
    catch(e) 
    {
        console.log(e);
        res.json({success:false});
    }
})

module.exports=router;