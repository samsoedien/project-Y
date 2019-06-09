const express = require('express');

const router = express.Router();

const authMiddleware = require('../middleware/auth');
const postValidation = require('../validation/posts');
const commentValidation = require('../validation/comments');
const postController = require('../controllers/posts');

router.get('/test', postController.testPosts);

router.get('/', authMiddleware, postController.getPosts);

router.post('/', [authMiddleware, postValidation], postController.postPost);

router.get('/:id', postController.getPostById);

router.delete('/:id', authMiddleware, postController.deletePost);

router.put('/like/:postId', authMiddleware, postController.putAddLike);

router.put('/unlike/:postId', authMiddleware, postController.putRemoveLike);

router.post(
  '/comment/:id',
  [authMiddleware, commentValidation],
  postController.postComment,
);

router.delete(
  '/comment/:id/:comment_id',
  authMiddleware,
  postController.deleteComment,
);

module.exports = router;
