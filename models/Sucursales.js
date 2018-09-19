'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sucursales = Schema({
	id : Number,
	nombre : String,
	cp : Date,
},
{ collection: 'Sucursales' });

module.exports = mongoose.model('Sucursales', sucursales);