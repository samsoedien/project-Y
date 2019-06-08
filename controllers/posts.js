const { check, validationResult } = require('express-validator/check');

const Post = require('../models/Post');
const User = require('../models/User');

exports.testPosts = (req, res, next) => res.send('Post routes are active');

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    if (!posts) return res.status(404).json({ msg: 'There are no posts' });

    return res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server Error');
  }
};

exports.postPost = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await User.findById(req.user.id).select('-password');

    const { text } = req.body;
    const newPost = new Post({
      text,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id,
    });
    const post = await newPost.save();
    res.json(post);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server Error');
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    console.error(err);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post has no object valid ID' });
    }
    return res.status(500).send('Server Error');
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await post.remove();
    res.json({ msg: 'Post removed' });
  } catch (err) {
    console.error(err);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post has no valid object ID' });
    }
    return res.status(500).send('Server Error');
  }
};

exports.putAddLike = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length > 0
    ) {
      return res.status(400).json({ msg: 'Post already liked' });
    }
    post.likes.unshift({ user: req.user.id });
    await post.save();

    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.putRemoveLike = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length > 0
    ) {
      return res.status(400).json({ msg: 'Post has not yet been liked' });
    }
    // Get remove index
    const removeIndex = post.likes
      .map(like => like.user.toString())
      .indexOf(req.user.id);
    post.likes.splice(removeIndex, 1);
    await post.save();

    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.postComment = async (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await User.findById(req.user.id).select('-password');
    const post = await Post.findById(req.params.id);

    const { text } = req.body;
    const newComment = {
      text,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id,
    };
    post.comments.unshift(newComment);

    await post.save();

    res.json(post.comments);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server Error');
  }
};

exports.deleteComment = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    const comment = post.comment.find(
      comment => comment.id === req.params.comment_id,
    );

    if (!comment) {
      return res.status(404).json({ msg: 'Comment does not exists' });
    }

    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    const removeIndex = post.comments
      .map(comment => comment.user.toString())
      .indexOf(req.user.id);
    post.comments.splice(removeIndex, 1);

    await post.save();

    res.json(post.comments);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server Error');
  }
};
