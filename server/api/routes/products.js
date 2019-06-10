const express = require('express');

const router = express.Router();

const authMiddleware = require('../middleware/products');
const productValidation = require('../validation/products');
const productController = require('../controllers/products');

router.get('/test', productController.testProducts);

router.get('/', productController.getProducts);

module.exports = router;
