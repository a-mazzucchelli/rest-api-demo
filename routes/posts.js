const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// submit post
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// get specific post
router.get('/:postId', async (req, res) => {
  try {
    const foundPost = await Post.findById(req.params.postId);
    res.json(foundPost);
  } catch (err) {
    res.json({ messaage: err });
  }
});

// delete specific post
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await Post.findByIdAndDelete(req.params.postId);
    res.json(removedPost);
  } catch (err) {
    res.json({ messaage: err });
  }
});

// update a post
router.put('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ messaage: err });
  }
});

module.exports = router;
