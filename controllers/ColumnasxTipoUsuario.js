'use strict'

const ColumnasxTipoUsuario = require('../models/ColumnasxTipoUsuario');


function getColumnasByIDTipoUsuario(req,res) {

	let idTipoUsuario = req.params.idTipoUsuario;

	console.log(idTipoUsuario);

	ColumnasxTipoUsuario.find({IDTipoUsuario:idTipoUsuario}, (err, columnas) => {
		if(err){
			return res.status(500).send({message:"Error al realizar la peticion"});
		}

		if(!columnas || columnas.length == 0){
			return res.status(500).send({message:"No existen productos"});
		}

		res.status(200).send(columnas[0]);
	});

}

module.exports = {
	getColumnasByIDTipoUsuario,
}
