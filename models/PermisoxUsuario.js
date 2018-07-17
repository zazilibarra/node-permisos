'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const permisoxUsuario = Schema({
	IDUsuario:Number,
},
{ collection: 'PermisosxUsuarios' });

module.exports = mongoose.model('PermisosxUsuarios', permisoxUsuario);