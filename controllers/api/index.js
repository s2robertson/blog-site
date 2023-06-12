const express = require('express');
const router = express.Router();

const userRoutes = require('./user');
router.use('/user', userRoutes);

const postRoutes = require('./post');
router.use('/post', postRoutes);

module.exports = router;