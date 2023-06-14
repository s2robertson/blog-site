const express = require('express');
const { User } = require('../../models/');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        req.session.userId = user.id;
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Registration failed' });
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                username: req.body.username
            }
        });
        if (!user) {
            return res.status(400).json({ msg: 'Login failed' });
        }
        const passwordIsValid = await user.comparePassword(req.body.password);
        if (!passwordIsValid) {
            return res.status(400).json({ msg: 'Login failed' });
        }

        req.session.userId = user.id;
        req.session.username = user.username;
        res.json({ msg: 'Login succeeded' });
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/logout', (req, res) => {
    req.session.destroy(function(err) {
        if (err) {
            return res.status(500).json(err);
        }
        res.json({ msg: 'Logged out' });
    });
})

module.exports = router;