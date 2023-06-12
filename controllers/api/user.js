const express = require('express');
const { User } = require('../../models/');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;