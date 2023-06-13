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
        res.render('home', { blogPosts, userId: req.session.userId });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.get('/login', (req, res) => {
    if (req.session?.userId) {
        return res.redirect('/');
    }
    res.render('login', { userId: req.session.userId });
})

module.exports = router;