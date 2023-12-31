const express = require('express');
const { User, BlogPost, Comment } = require('../models');
const { withRouteAuth } = require('../util/auth');

const router = express.Router();

// Home Page
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
    // if the user is already logged in, return to the home page
    if (req.session?.userId) {
        return res.redirect('/');
    }
    res.render('login', { userId: req.session.userId });
})

// create a new blog post (needs to come before /blogPost/:id)
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
        res.render('blogPost', { 
            blogPost, 
            userId: req.session.userId ,
            username: req.session.username
        });
    } catch (err) {
        console.log(err);
        res.redirect('/');
    }
})

router.get('/blogPost/:id/edit', withRouteAuth, async (req, res) => {
    try {
        const blogPostData = await BlogPost.findByPk(req.params.id, {
            include: {
                model: User,
                attributes: ['id', 'username']
            }
        });
        // if the user tried to access an invalid id, or a blog post owned by someone else
        if (!blogPostData || blogPostData.userId != req.session.userId) {
            return res.redirect('/dashboard');
        }

        const blogPost = blogPostData.get({ plain: true });
        res.render('editBlogPost', {
            blogPost,
            userId: req.session.userId,
            pageTitle: 'Edit Blog Post'
        });
    } catch (err) {
        console.log(err);
        res.redirect('/dashboard');
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