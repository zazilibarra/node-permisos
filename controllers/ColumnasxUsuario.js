'use strict'

const ColumnasxUsuario = require('../models/ColumnasxUsuario');


function getColumnasByIDUsuario(req,res) {

	let idUsuario = req.params.idUsuario;

	ColumnasxUsuario.find({IDUsuario:idUsuario}, (err, columnas) => {
		if(err){
			return res.status(500).send({message:"Error al realizar la peticion"});
		}

		if(!columnas || columnas.length == 0){
			return res.status(500).send({message:"No existen datos"});
		}

		res.status(200).send(columnas[0]);
	});

}

module.exports = {
	getColumnasByIDUsuario,
}
