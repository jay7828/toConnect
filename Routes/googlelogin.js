const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../model/userSchema');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { checkUserProfile } = require('../middleware/checkuserProfile');

router.post("/auth/googlelogin", checkUserProfile, async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;
    const name = req.body.name;

    try {
        // Check if user with the provided email already exists
        const existingUser = await User.findOne({ email: email });

        if (existingUser) {
            // Email already exists, send response with profile completion status
            res.json({ success: true, isProfileComplete: req.isProfileComplete });
        } else {
            // Email does not exist, create a new user
            await User.create({
                username: username,
                name: name,
                email: email,
                password: password,
                branch:"IT",
                year_of_passing:"2023",
                skills:"Web",
                contact_no:"9406885406"
            });

            // Send response with profile completion status
            res.json({ success: true, isProfileComplete: false });
        }
    } catch (error) {
        console.error('Error in /auth/googlelogin route:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

module.exports = router;
