'use strict'
import Cart from './cart.model';
import Product from '../api/product/product.model'

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

export function getCart(req, res) {
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  res.status(200).json(cart);
}

export function addToCart(req, res) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, function(err, product) {
    if (err) {
      return res.redirect('/404.html');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    res.status(200).json(cart);
  })
}

export function removeFromCart(req, res) {
  var productId = req.params.id
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  cart.removeItem(productId)
  req.session.cart = cart;
  res.status(200).json(cart);
}

export function emptyCart(req, res) {
  var cart = new Cart({});
  req.session.cart = cart;
  res.status(200).json(cart);
}