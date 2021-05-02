const express = require('express');
const router = express.Router();
//const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const { check, validationResult } = require("express-validator");

const User = require('../models/User');

// @route   /api/users/register
// @desc    Register a user
// @access  Public
router.post('/register', [
    check('name')
        .escape()
        .notEmpty()
        .withMessage("Please enter your name.")
        .isLength({min: 3,max:30})
        .withMessage("That name is too long! ")
        .matches(/^[A-Za-z .,'-]+$/),
    check('email')
        .escape()
        .notEmpty()
        .withMessage("An email address is required to register.")
        .isEmail()
        .withMessage("Please use an email address."),
    check('company')
        .escape()
        .notEmpty()
        .withMessage('Please include youe company.')
        .isLength({ min: 3, max: 20 })
        .withMessage('Must be at least 3 characters.')
], async function (req, res) { 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log("validation error");
            return res.status(400).json({ errors: errors.array() });
        }
        //res.send("passed registration");
        let msg = `Welcome ${req.body.email}!`;
        try {
            let user = await User.findOne({ email: req.body.email })

            if (user) {
                /* Note: technically, the user shouldn't see this, since the user logs in through auth.js using only email*/
                /* if its a new user/email, this '/register' route appears with addition input fields (below)*/
                /* if for some reason they they are still found in the DB after the fact, this message will show and token will be send as it should've from auth already */
                msg = 'It looks like you\'ve visited before. Welcome back!'
                
            } else {
                /* new user */
                //overwrite 'user' variable. Create new user class instance using information send in resuest.body
                user = new User({ name: req.body.name, email: req.body.email, company: req.body.company });

                /* no password needed */
                // const salt = await bcrypt.genSalt(10);
                // user.password = await bcrypt.hash(req.body.password, salt);

                await user.save();
            }
             //send token to client
             const payload = {
                user: {
                    id: user.id // where does id come from?
                    //added during instantiation by the User class, which was was created using the mongoose library
                }
            }
            
            //payload, secret, options, callback
            jwt.sign(payload, config.get('jwtSecret'), {
                expiresIn: 86400
            }, (err, token) => {
                if (err) throw err;
                res.json({msg, "token": token })
            });

            
        } catch (e) {
            console.error(e.message);
            res.status(400).send("Server error"); 
        }
});



module.exports = router;