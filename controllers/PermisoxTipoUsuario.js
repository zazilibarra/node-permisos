'use strict'

const PermisoxTipoUsuario = require('../models/PermisoxTipoUsuario');

function getPermiso(req,res) {

	PermisoxTipoUsuario.find({}, (err, permisos) => {
		if(err){
			return res.status(500).send({message:"Error al realizar la peticion"});
		}

		if(!permisos){
			return res.status(500).send({message:"No existen productos"});
		}

		res.status(200).send({permisos});
	});

	
}

function getPermisoByIDTipoUsuario(req,res) {

	let idTipoUsuario = req.params.idTipoUsuario;

	PermisoxTipoUsuario.find({IDTipoUsuario:idTipoUsuario}, (err, permisos) => {
		if(err){
			return res.status(500).send({message:"Error al realizar la peticion"});
		}

		if(!permisos){
			return res.status(500).send({message:"No existen productos"});
		}

		res.status(200).send({permisos});
	});


}

module.exports = {
	getPermiso,
	getPermisoByIDTipoUsuario
}
