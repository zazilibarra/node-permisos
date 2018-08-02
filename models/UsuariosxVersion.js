'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuariosxVersion = Schema({
	idUsuario : Number,
	version : String,
	fechaAcepta : Date,
},
{ collection: 'UsuariosxVersion' });

module.exports = mongoose.model('UsuariosxVersion', usuariosxVersion);