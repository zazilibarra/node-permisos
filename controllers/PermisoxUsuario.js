'use strict'

const PermisoxUsuario = require('../models/PermisoxUsuario');

function getPermisoxUsuario(req,res) {

	PermisoxUsuario.find({}, (err, permiso) => {
		if(err){
			return res.status(500).send({message:"Error al realizar la peticion"});
		}

		if(!permiso){
			return res.status(500).send({message:"No existen datos"});
		}

		res.status(200).send(permiso);
	});

}

function getPermisoxUsuarioByIDUsuario(req,res) {

	let idUsaurio = req.params.idUsuario;

	PermisoxUsuario.find({IDUsuario:idUsaurio}, (err, permiso) => {
		if(err){
			return res.status(500).send({message:"Error al realizar la peticion"});
		}

		if(!permiso){
			return res.status(500).send({message:"No existen datos"});
		}

		res.status(200).send(permiso);
	});

}

module.exports = {
	getPermisoxUsuario,
	getPermisoxUsuarioByIDUsuario
}
