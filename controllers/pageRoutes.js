const express = require('express');
const { User, BlogPost, Comment } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const blogPosts = (await BlogPost.findAll({
            include: {
                model: User,
                as: 'author'
            },
            order: [['createdAt', 'DESC']]
        })).map(blogPost => blogPost.get({ plain: true }));
        res.render('home', { blogPosts });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;