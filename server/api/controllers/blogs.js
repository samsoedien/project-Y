const { validationResult } = require('express-validator/check');

const Blog = require('../models/Blog');
const Profile = require('../models/Profile');

exports.testBlogs = (req, res, next) => res.send('Blogs route is active');

exports.getBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find()
      .select('-__v')
      .populate('user', ['name, avatar'])
      .sort({ date: -1 })
      .exec();
    return res.status(200).json(blogs);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server Error');
  }
};

exports.getBlogById = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id)
      .select('-__v')
      .populate('user', ['name, avatar'])
      .exec();
    return res.status(200).json(blog);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server Error');
  }
};

exports.postBlog = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { headline, article } = req.body;

  try {
    let blog = await Blog.findOne({ headline });
    if (blog) {
      return res.status(400).json({ msg: 'This headline already exists' });
    }
    const newBlog = {
      _id: new mongoose.Types.ObjectId(),
      user: req.user.id,
      ...req.body,
    };
    await newBlog.save();
    return res.status(201).json(blog);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server Error');
  }
};

exports.updateBlog = async (req, res, next) => {};

exports.deleteBlog = async (req, res, next) => {};

exports.postFavoriteBlog = async (req, res, next) => {};
