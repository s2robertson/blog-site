const express = require('express');
const { BlogPost } = require('../../models');
const { withApiAuth } = require('../../util/auth');

const router = express.Router();

/*router.get('/', async (req, res) => {
    try {
        const posts = await BlogPost.findAll();
        res.json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
})*/

router.post('/', withApiAuth, async (req, res) => {
    try {
        const post = await BlogPost.create({
            ...req.body,
            userId: req.session.userId
        });
        res.status(201).json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Saving blog post failed' });
    }
})

router.put('/:id', withApiAuth, async (req, res) => {
    try {
        const rowsUpdated = await BlogPost.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json(rowsUpdated);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/:id', withApiAuth, async (req, res) => {
    try {
        const rowsDeleted = await BlogPost.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json(rowsDeleted);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;