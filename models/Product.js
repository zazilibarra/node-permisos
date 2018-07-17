'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = Schema({
	name:String,
	picture:String,
	price:Number,
});

module.exports = mongoose.model('Product', productSchema);

