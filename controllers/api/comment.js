const express = require('express');
const { Comment } = require('../../models');
const { withApiAuth } = require('../../util/auth');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const where = {};
        if (req.query.blogPostId) {
            where.blogPostId = req.query.blogPostId;
        }
        const comments = await Comment.findAll({ where });
        res.json(comments);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/', withApiAuth, async (req, res) => {
    try {
        const comment = await Comment.create({
            ...req.body,
            userId: req.session.userId
        });
        res.status(201).json(comment);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.put('/:id', withApiAuth, async (req, res) => {
    try {
        const rowsUpdated = await Comment.update(req.body, {
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
        const rowsDeleted = await Comment.destroy({
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