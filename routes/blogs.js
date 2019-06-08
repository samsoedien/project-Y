const express = require('express');

const authMiddleware = require('../middleware/auth');
const blogController = require('../controllers/blogs');
const blogValidation = require('../validation/blogs');

const router = express.Router();

router.get('/test', blogController.testBlogs);

router.get('/', blogController.getBlogs);

router.get('/:id', blogController.getBlogById);

router.post('/', [authMiddleware, blogValidation], blogController.postBlog);

router.patch(
  '/:id',
  [authMiddleware, blogValidation],
  blogController.updateBlog,
);

router.delete('/:id', authMiddleware, blogController.deleteBlog);

module.exports = router;
