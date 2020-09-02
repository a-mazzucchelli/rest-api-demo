const Post = require('../models/Post');

// get all posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
};

// submit post
exports.submitPost = async (req, res) => {
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
};

// get specific post
exports.getPostById = async (req, res) => {
  try {
    const foundPost = await Post.findById(req.params.postId);
    res.json(foundPost);
  } catch (err) {
    res.json({ messaage: err });
  }
};

// update post
exports.updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ messaage: err });
  }
};

// delete post
exports.deletePost = async (req, res) => {
  try {
    const removedPost = await Post.findByIdAndDelete(req.params.postId);
    res.json(removedPost);
  } catch (err) {
    res.json({ messaage: err });
  }
};
