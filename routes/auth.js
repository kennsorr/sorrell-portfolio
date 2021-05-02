const express = require('express');
const router = express.Router();
//const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const util = require('util');
const { check, validationResult } = require("express-validator");

const User = require('../models/User');

// @route   POST /api/auth/
// @desc    Log in an unauthenticated user, get token
// @access  Public

router.post('/', [
    check('email')
        .escape()
        .notEmpty()
        .withMessage("An email address is required to register.")
        .isEmail()
        .withMessage("Please use an email address.")
], async function (req, res) {
        //res.send('Log in.');
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log("validation error");
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;

        try {
            let user = await User.findOne({ email });
            if (!user) {
                /* Now redirect to user register page. */
                return res.status(400).json({ msg: `No account currently exists under ${req.email}.` });
            } else {
                /* no password */
                //compare plan text password from user input to the password fetched from the db using the input email
                /*
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                    return res.status(400).json({ msg: `The password entered does not match match this account.` });
                }
                */
                
                //send token to client
                const payload = {
                    user: {
                        id: user.id // where does id come from?
                        //it's instantiates from the User class, which was was created from the mongoose library
                    }
                }
                //payload, secret, options, callback
                jwt.sign(payload, config.get('jwtSecret'), {
                    expiresIn: 864000
                }, (err, token) => {
                    if (err) throw err;
                    res.json({ "token": token })
                });
            }
        } catch (error) {
            console.error(e.message);
            res.status(400).send("Server error"); 
        }
});

// @route   GET /api/auth/
// @desc    Get token of authenticated user (using token sent to server by client)
// @access  Private
router.get('/', auth, async function (req, res) { 
    try {
        //where did 'req.user.id' come from?
        //before the get callback was called, the auth middleware was called.
        //auth middleware used jwt.verify(token, config.get("jwtSecret") to get the user for the provided token.
        //it added the 'user' property to the 'req' object befre the 'req' object was passed to the callback function
        const user = await User.findById(req.user.id).select('-password');
        res.json(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error")
    }
});

module.exports = router;