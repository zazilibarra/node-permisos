'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const columnasxTipoUsuario = Schema({
	IDTipoUsuario:Number,
},
{ collection: 'ColumnasxTiposUsuarios' });

module.exports = mongoose.model('ColumnasxTiposUsuarios', columnasxTipoUsuario);