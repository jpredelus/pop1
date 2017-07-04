'use strict';

import mongoose from 'mongoose';

var ProductSchema = new mongoose.Schema({
  _vendor: {type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId()},
  name: {type: String, required: true},
  description: {type: String, required: true},
  imagePaths: {type: [String], required: true},
  sizes: {type: [String], required: true},
  type: {type: String, required: true},
  quantity: {type: Number, required: true},
  price: {type: Number, required: true},
  color: {type: String, required: true},
  active: Boolean
});

export default mongoose.model('Product', ProductSchema);
