const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller');

// get all posts
router.get('/', controller.getPosts);
// submit post
router.post('/', controller.submitPost);
// get specific post
router.get('/:postId', controller.getPostById);
// update post
router.put('/:postId', controller.updatePost);
// delete post
router.delete('/:postId', controller.deletePost);

module.exports = router;
