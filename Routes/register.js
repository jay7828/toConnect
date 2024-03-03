const express = require('express');
const router = express.Router();
const User = require('../model/userSchema');
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = "wearehereontoconnectwebsite";

// Import checkUserProfile middleware
const { checkUserProfile } = require('../middleware/checkuserProfile');

router.post('/register', [
    body('username').matches(/^[a-zA-Z0-9_-]+$/).withMessage('Username can only contain alphanumeric characters, underscores, and hyphens'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
],async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Check if the username is already taken
        let existingUser = await User.findOne({ username: req.body.username });
        if (existingUser) {
            return res.status(400).json({ errors: [{ msg: 'Username already exists' }] });
        }

        // Check if the email is already taken
        existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ errors: [{ msg: 'Email already exists' }] });
        }

        // If username and email are unique, proceed with user creation
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        await User.create({
            username: req.body.username,
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });
        res.json({ success: true, isProfileComplete:false});
    } catch (e) {
        console.error(e);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

router.post('/login', [
    body('email').isEmail(),
    body('password').isLength({ min: 8 }),
], checkUserProfile, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const email = req.body.email;
    try {
        const userdata = await User.findOne({ email });
        if (!userdata) {
            return res.status(400).json({ errors: [{ msg: "Email is invalid" }] });
        }
        const pwdCompare = await bcrypt.compare(req.body.password, userdata.password);
        if (!pwdCompare) {
            return res.status(400).json({ errors: [{ msg: "Wrong password" }] });
        }
        const data = {
            user: {
                id: userdata.id
            }
        }
        const authToken = jwt.sign(data, jwtSecret);
        return res.json({ success: true, userdata, authToken: authToken, isProfileComplete: req.isProfileComplete });
    } catch (e) {
        console.error(e);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

module.exports = router;
