const express = require('express');
const User = require('../../models/User');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        console.log(`Attempting to create user: ${req.body}`);
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
})

module.exports = router;