'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const estructuraMenus = Schema({
	ID:String,
	Href:String,
	Titulo:String,
	Icono:String,
},
{ collection: 'EstructuraMenus' });

module.exports = mongoose.model('EstructuraMenus', estructuraMenus);