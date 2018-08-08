'use strict'

const PermisoxTipoUsuario = require('../models/PermisoxTipoUsuario');

function getPermiso(req,res) {

	PermisoxTipoUsuario.find({}, (err, permisos) => {
		if(err){
			return res.status(500).send({message:"Error al realizar la peticion"});
		}

		if(!permisos || permisos.length == 0){
			return res.status(500).send({message:"No existen permisos"});
		}

		res.status(200).send(permisos);
	});

}

function getPermisoByIDTipoUsuario(req,res) {

	let idTipoUsuario = req.params.idTipoUsuario;

	PermisoxTipoUsuario.find({IDTipoUsuario:idTipoUsuario}, (err, permisos) => {
		if(err){
			return res.status(500).send({message:"Error al realizar la peticion"});
		}

		if(!permisos || permisos.length == 0){
			return res.status(500).send({message:"No existen permisos"});
		}

		res.status(200).send(permisos[0]);
	});

}

module.exports = {
	getPermiso,
	getPermisoByIDTipoUsuario
}
