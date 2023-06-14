const express = require('express');
const { User, BlogPost, Comment } = require('../models');
const { withRouteAuth } = require('../util/auth');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const blogPosts = (await BlogPost.findAll({
            include: {
                model: User,
                attributes: ['id', 'username']
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

router.get('/blogPost/new', withRouteAuth, (req, res) => {
    res.render('editBlogPost', { 
        userId: req.session.userId,
        pageTitle: 'New Blog Post'
    });
})

router.get('/blogPost/:id', async (req, res) => {
    try {
        const blogPostData = await BlogPost.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: ['id', 'username']
            }, {
                model: Comment,
                include: {
                    model: User,
                    attributes: ['id', 'username']
                },
                order: ['createdAt']
            }]
        });
        if (!blogPostData) {
            return res.redirect('/');
        }
        
        const blogPost = blogPostData.get({ plain: true });
        res.render('blogPost', { blogPost, userId: req.session.userId });
    } catch (err) {
        console.log(err);
        res.redirect('/');
    }
})

router.get('/dashboard', async (req, res) => {
    try {
        const blogPosts = (await BlogPost.findAll({
            where: { userId: req.session.userId },
            include: {
                model: User,
                attributes: ['id', 'username']
            },
            order: [['createdAt', 'DESC']]
        })).map(blogPost => blogPost.get({ plain: true }));

        res.render('dashboard', { blogPosts, userId: req.session.userId });
    } catch (err) {
        console.log(err);
        res.redirect('/');
    }
})

module.exports = router;