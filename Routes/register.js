const express =require('express')
const router = express.Router();
const User =require('../model/userSchema')
const {body,validationResult} =require('express-validator')


router.post('/register',
   [ body('email').isEmail(),
    body('password').isLength({min:8})],

async (req,res)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty())
    {       
        return res.status(400).json({errros: errors.array()});
    }
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
}
)

module.exports=router;