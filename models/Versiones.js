'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const versiones = Schema({
	version: String
},
{ collection: 'versiones' });

module.exports = mongoose.model('versiones', versiones);