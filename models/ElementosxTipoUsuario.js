'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const elementosxTipoUsuario = Schema({
	IDTipoUsuario:Number,	
},
{ collection: 'ElementosxTiposUsuarios' });

module.exports = mongoose.model('ElementosxTiposUsuario', elementosxTipoUsuario);