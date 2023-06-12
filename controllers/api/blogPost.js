const express = require('express');
const { BlogPost } = require('../../models');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await BlogPost.findAll();
        res.json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/', async (req, res) => {
    try {
        const post = await BlogPost.create(req.body);
        res.status(201).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.put('/:id', async (req, res) => {
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

router.delete('/:id', async (req, res) => {
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