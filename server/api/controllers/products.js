const { check, validationResult } = require('express-validator/check');

const Product = require('../models/Product');

exports.testProducts = (req, res, next) =>
  res.send('Product routes are active');

exports.getProducts = async (req, res, next) => {};

exports.getProduct = async (req, res, next) => {};

exports.postProduct = async (req, res, next) => {};

exports.deleteProducts = async (req, res, next) => {};
