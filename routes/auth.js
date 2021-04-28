const express = require('express');
const router = express.Router();

// @route GET api/auth
// @desc Get logged in user using token
// @access Private
router.get('/', (req, res) => {
    res.send('Register a user')
});

// @route GET api/auth
// @desc Authenticate user, and get token
// @access Public
router.post('/', (req, res) => {
    res.send('Register a user')
});
module.exports = router;