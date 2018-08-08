'use strict'

const ElementosxUsuario = require('../models/ElementosxUsuario');

function getElementosByIDUsuario(req,res) {

	let idUsuario = req.params.idUsuario;

	console.log(idUsuario);

	ElementosxUsuario.find({IDUsuario:idUsuario}, (err, elementos) => {
		if(err){
			return res.status(500).send({message:"Error al realizar la peticion"});
		}

		if(!elementos || elementos.length == 0){
			return res.status(500).send({message:"No existen datos"});
		}

		res.status(200).send(elementos[0]);
	});

}

module.exports = {
	getElementosByIDUsuario,
}
