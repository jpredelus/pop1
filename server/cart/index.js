'use strict';

var express = require('express');
var controller = require('./cart.controller');

var router = express.Router();

router.get('/add-product/:id', controller.addToCart);
router.get('/remove-product/:id', controller.removeFromCart);
router.get('/empty', controller.emptyCart);
router.get('/', controller.getCart);

module.exports = router;