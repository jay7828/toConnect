const express = require('express');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');
const User =require('../model/userSchema');

const client = new OAuth2Client("1063626587554-t35p4t5vfu1a2ier97tch4u74qaboghs.apps.googleusercontent.com");

router.post("/googlelogin", (req, resp) => {
    const { tokenId } = req.body;
    client.verifyIdToken({ idToken: tokenId, audience: "1063626587554-t35p4t5vfu1a2ier97tch4u74qaboghs.apps.googleusercontent.com" })
        .then(response => {
            const { email_verified, name, email } = response.payload; // Use response.payload instead of response.getPayload
            if (email_verified) {
                User.findOne({ email }).exec((err, user) => {
                    if (err) {
                        return resp.status(400).json({
                            error: "something went wrong"
                        });
                    } else {
                        if (user) {
                            const { _id, name, email } = user;
                            resp.json({
                                user: { _id, name, email }
                            });
                        } else {
                            let password = email + "googlelogin";
                            let newUser = new User({ name, email, password });
                            newUser.save((err, data) => {
                                if (err) {
                                    return resp.status(400).json({
                                        error: "something went wrong..."
                                    });
                                }
                                const { _id, name, email } = newUser;
                                resp.json({
                                    user: { _id, name, email }
                                });
                            });
                        }
                    }
                });
            }
        })
        .catch(err => {
            console.error(err);
            return resp.status(500).json({
                error: "Internal server error"
            });
        });
});

module.exports = router;
