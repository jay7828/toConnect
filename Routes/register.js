const express =require('express');
const router = express.Router();
const User =require('../model/userSchema');
const {body,validationResult} =require('express-validator');
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const jwtSecret="wearehereontoconnectwebsite";


router.post('/register',
   [ body('email').isEmail(),
    body('password').isLength({min:8})],

    async (req,res)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty())
    {       
        return res.status(400).json({errros: errors.array()});
    }

    const salt=await bcrypt.genSalt(10);
    let secPassword=await bcrypt.hash(req.body.password,salt)

        try{
        await User.create({
                username: req.body.username,
                name: req.body.name,
                email: req.body.email,
                password: secPassword
            })
            res.json({success:true});
        }
        catch(e) 
        {
            console.log(e);
            res.json({success:false});
        }
}
)
router.post('/login',
   [ body('email').isEmail(),
    body('password').isLength({min:8})],

    async (req,res)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty())
    {       
        return res.status(400).json({errros: errors.array()});
    }
    const email =req.body.email;
    try{
        const userdata = await User.findOne({email})
        if(!userdata)
        {
            return res.status(400).json({errros:"Email is Invalid"});
        }
        const pwdCompare=await bcrypt.compare(req.body.password,userdata.password)

        if(!pwdCompare)
        {
            return res.status(400).json({errros:" is Invalid"});
        }
        const data={
            user:{
                id:userdata.id
            }
        }
        const authToken=jwt.sign(data,jwtSecret)
        return res.json({success:true,authToken:authToken});
    }
        catch(e) 
        {
            console.log(e);
            res.json({success:false});
        }
}
)

module.exports=router;