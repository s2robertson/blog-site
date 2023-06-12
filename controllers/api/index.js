const express = require('express');
const router = express.Router();

const userRoutes = require('./user');
router.use('/user', userRoutes);

const postRoutes = require('./blogPost');
router.use('/blogpost', postRoutes);

module.exports = router;