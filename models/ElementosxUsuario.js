'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const elementosxUsuario = Schema({
	IDUsuario:Number,	
},
{ collection: 'ElementosxUsuarios' });

module.exports = mongoose.model('ElementosxUsuario', elementosxUsuario);