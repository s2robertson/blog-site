const express = require('express');
const router = express.Router();

const userRoutes = require('./user');
router.use('/user', userRoutes);

const postRoutes = require('./blogPost');
router.use('/blogPost', postRoutes);

const commentRoutes = require('./comment');
router.use('/comment', commentRoutes);

module.exports = router;