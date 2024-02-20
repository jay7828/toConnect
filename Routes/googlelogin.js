const express = require('express');
const router = express.Router();
const {OAuth2Client}=require('google-auth-library');

const client=new OAuth2Client("1063626587554-t35p4t5vfu1a2ier97tch4u74qaboghs.apps.googleusercontent.com");
router.post("/googlelogin",(req,resp)=>{
    const {tokenId}=req.body;
    client.verifyIdToken({tokenId,audience:"1063626587554-t35p4t5vfu1a2ier97tch4u74qaboghs.apps.googleusercontent.com"}).then(response=>{
        const{email_verified,name,email}=response.getPayload;
        if(email_verified)
        {
            User.findOne({email}).exec((err,user) => {
                 if(err){
                    return resp.status(400).json({
                        error:"somethig went wrong"
                    })
                 }else{
                    if(user){
                          const token=jwt.sign({_id:user.id},process.env.JWT_SIGNIN_KEY,{expiresIn:'7d'});
                          const {_id,name,email}=user;
                          resp.json({
                            token,
                            user:{_id,name,email}
                          })
                    }
                    else{
                        let password= email+process.env.JWT_SIGNIN_KEY;
                        let newUser=new User({name,email,password});
                        newUser.save((err,data)=>{
                            if(err)
                            {
                                return res.status(400).json({
                                    error:"something went wrong..."
                                })
                            }
                            const token=jwt.sign({_id:data.id},process.env.JWT_SIGNIN_KEY,{expiresIn:'7d'});
                          const {_id,name,email}=newUser;
                          resp.json({
                            token,
                            user:{_id,name,email}
                          })
                        })
                    }npm
                 }
            })
        }
    })
    console.log(response.payload);
})
module.exports = router;