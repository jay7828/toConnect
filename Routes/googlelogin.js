const express = require('express');
const router = express.Router();
const {OAuth2Client}=require('google-auth-library');

const client=new OAuth2Client("")
router.post("/googlelogin",(req,resp)=>{
    const {tokenId}=req.body;
    console.log()
})