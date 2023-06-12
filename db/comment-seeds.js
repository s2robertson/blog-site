const { Comment } = require('../models');

const commentData = [{
    commenterId: 2,
    blogPostId: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}, {
    commenterId: 3,
    blogPostId: 1,
    text: 'Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel.'
}, {
    commenterId: 1,
    blogPostId: 3,
    text: 'Et odio pellentesque diam volutpat commodo sed egestas egestas.'
}, {
    commenterId: 3,
    blogPostId: 3,
    text: 'Diam quis enim lobortis scelerisque. Rhoncus est pellentesque elit ullamcorper dignissim cras.'
}];

module.exports = function() {
    return Comment.bulkCreate(commentData);
}